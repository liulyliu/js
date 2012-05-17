/*
 *  author: liulyliu
 *  Depends on the jQuery
 *  2012 05 17
 *  */
DataControl =  function(opts){
        var _config = {
            dataSourse:""
           ,dataType : "jsonp"
           ,dataVarible :""    
           ,page     : 1
           ,pageType : "server"
           ,dataArrList:""
           ,countName: ""
        }

        var config =$.extend(_config,opts);
        var me = this,me.constructor.dataCache = {},me.constructor.fullDataCache = {},pageCache = {},total = 0,pageSize = config.pageSize||10,totalPage=1,page = config.page,start = (page-1)*pageSize;
        /*
         * getScript
         * 动态加载JS文件 
         * priavte
         * */
        var getScript = function(url,callback,charset,err,opts){
            /* $.getScript will Judge domain
             * */
                var head = document.getElementsByTagName("head")[0] || document.documentElement;
                var script = document.createElement("script");
                script.src = url;
                script.charset = charset || 'GBK';
                opts = opts || [];
                var done = false;
                var me = this;
                script.onload = script.onreadystatechange = function() {
                    if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
                        done = true;
                        if(callback) callback.apply(me, opts);
                        script.onload = script.onreadystatechange = null;
                        if(err)
                            script.onerror = err;
                        if(head && script.parentNode) head.removeChild( script );
                    }
                };
                head.insertBefore( script, head.firstChild );
            }

        /*
         * getUrl 
         * 对传进来的URL进行处理 
         * priavte
         * */
        var getUrl = function(){
            if(typeof config.dataSourse != "string" || config.dataSourse == ""){
                return "";
            }
            else{
                me.URL = config.dataSourse.replace(/<\{pageSize\}>/gi,pageSize)
                    .replace(/<\{page\}>/gi,page).replace(/<\{start\}>/gi,start);
               return me.URL 
                                           
            }
        }; 

        /*
         * callBack
         * 处理数据 
         * priavte
         * */
        var callBack = function(url,fn,params){
            //数据返回后回调该方法
            me.constructor.dataCache[escape(url)] = this.data;
            me.constructor.fullDataCache[escape(url)] = this.fullData;
            if(typeof fn === "function"){
                fn.call(this,this.fullData);
            }
        };
         
        /*
         * getDataByServer 
         * 异步获取数据,服务器端分页 
         * priavte
         * */   
        var getDataByServer = function(url,dataType){
            //TODO 目前没有考虑编码问题
              if(typeof config.loadFn == "function"){
                    config.loadFn.call(me);
              }
              var initData = function(_d){
                    var _data = me.fullData = _d || {};
                    var _count,data;
                    if(config.dataArrList && config.dataArrList != ""){
                      try{data = new Function("_d","return _d."+config.dataArrList.replace(/>/g,".")+"|| {}")(_d)}catch(e){
                          data = {};
                      };
                    }
                    if(config.countName && config.countName !=""){
                      try{var _count = new Function("_d","return _d."+config.countName.replace(/>/g,"."))(_d)}catch(e){
                          _count = 0;
                      };
                    }
                    if(data.length ==undefined){
                        _e("no data  dataArrList maybe error:url("+me.URL+")");
                    }
                    total = isNaN(_count)?data.length>>0:_count>>0;
                    totalPage = parseInt(total/pageSize)+Math.min(total%pageSize,1);
                    if(data.length>>0>0){
                        me.data = data;
                    }
                    else{
                        me.data = [];
                    }
                    callBack.apply(me,[url,opts.fn,_d]);                
              };
          if(me.constructor.dataCache[escape(url)]){
                this.data = me.constructor.dataCache[escape(url)];
                this.fullData = me.constructor.fullDataCache[escape(url)];
                //callBack.apply(me,[url,opts.fn,me.constructor.fullDataCache[escape(url)]]);  
                initData(this.fullData);
              }else{
                  var _data = {};
                      _data[config.totalName] = 0;
                      _data[config.dataName]  = [];
                  switch(dataType){
                      case "variable":
                          getScript(url,function(){
                              _data = window[config.dataVarible]
                              initData(_data);
                          });
                      break;
                      case "jsonp":
                          $.getJSON(url,{callback:"?"},function(responseData){
                            initData(responseData);
                          });
                      break;
                      case "function":
                            window[config.initName] = function(_data){
                                initData(_data); 
                            }
                            getScript(url,function(){});
                      break;      
                      case "json":
                          $.getJSON(url,function(responseData){
                                initData(responseData);
                          });
                      break;
                }
            }
         };


        /*
         * getDataByClient 
         * 异步获取数据,客户端分页,或不分页 
         * priavte
         * */   
        var getDataByClient = function(url,dataType){
            //TODO:客户端方法还未完成
                if(me.constructor.dataCache[escape(url)]){
                  this.data = pageCache[page];
                  callBack.apply(me,[url,opts.fn,arguments]);  
              }
              else{ 
                    var initData = function(_data){
                        try{
                            data = new Function("_d","return _d."+config.dataArrList.replace(/>/g,"."))(_data);
                        }catch(e){}
                        var data = data || {}
                        total = data.length>>0;
                        if(/^nopages$/i.test(config.pageType)){
                            me.data = data;
                        }else{
                            totalPage = parseInt(total/pageSize)+Math.min(total%pageSize,1);
                            var p = 1;
                            for(;p<=totalPage;p++){
                                pageCache[p] = data.splice(0,pageSize);
                            }
                           me.data = pageCache[page]; 
                        }
                        
                    callBack.apply(me,[url,opts.fn,arguments]);  
                    }
                    switch(dataType){
                      case "variable":
                          $.getScript(url,function(){
                              _data = window[config.dataVarible]
                              initData(_data);
                          });
                      break;
                      case "jsonp":
                          $.getJSON(url,function(responseData){
                                    initData(responseData.data);
                          });
                      break;    
                      case "json":
                          $.getJSON(url,function(responseData){
                                    initData(responseData.data);
                          });
                      break;
                } 
              }            

        };

        /*
         * constructor 
         * 构造函数，初始化时调用 
         * priavte
         * */
        var constructor = function(){
            if(/^server$/i.test(config.pageType)){
                getDataByServer.apply(this,[getUrl(),config.dataType]);
            }
            else if(/^client$|^nopages$/i.test(config.pageType)){
                getDataByClient.apply(this,[config.dataSourse,config.dataType]);
            }
        }


        /*
         * total
         * 查看数据总条数
         * public
         * */ 
        this.total = function(){
           return total; 
        }
        /*
         * totalPage
         * 查看总页数
         * public
         * */ 
        this.totalPage = function(){
           return totalPage; 
        }

        /*
         * pageSize 
         * 查看或设置每页显示的数据数。
         * public 
         * */
        this.pageSize =function(size){
            if(size && parseInt(size)>0){
                if(size==pageSize){
                }
                else{
                    this.clearCache();//重设pageSize需清空缓存重新获取数据
                    pageSize = size;
                    totalPage = parseInt(total/pageSize)+Math.min(total%pageSize,1);
                    this.page(1);
                }
            }
            return pageSize;        

        }; 
        /*
         * page 
         * 查看当前页数，或跳转至某一页
         * public 
         * */
        this.page = function(p){
            if(p){
                var p =parseInt(p); 
                if(p != page && p>0 && p<=totalPage){
                   page = p;
                   start = (page-1)*pageSize;
                   constructor.apply(this); 
                }
                else if(p == page){
                   constructor.apply(this); 
                }
            }
            return page;
        };


        /*
         * prevPage 
         * 跳转至上一页
         * public 
         * */
        this.prevPage = function(){
            if(page>1){
                this.page(page-1);
            }
        };   

        /*
         * nextPage 
         * 跳转至下一页
         * public 
         * */
        this.nextPage = function(){
            if(page<totalPage){
               this.page(page+1);
            }
        };   

        /*
         * page 
         * 查看当前页数，或跳转至某一页
         * public 
         * */
        this.clearCache = function(){
            //TODO 没有做针对URL的清空 
            me.constructor.dataCache = {};
            me.constructor.fullDataCache = {};
            return this;
        };
        constructor.apply(this);//初始化
    }
