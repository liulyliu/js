(function() {
    var G = {};
    G.Game = function() {
        this.boxWidth = 20; //单位宽度
        this.boxHeight = 15; //单位长度
        this.blockWidth = 30; //单位块边长
        this.speed = 200; //运动速度
        var start, _this = this,
        blockWidth = this.blockWidth - 2,
        //border为1 预留
        snakeBox = document.createElement("div"),
        //容器
        snakeBody = [],
        //蛇身
        foodObj = "",
        //食物对象
        moveFinish = direction = 0; //移动方向 :0-上 1-左 2-下 3-右

        function block(l, t) { //创建单位块
            var el = document.createElement("span");
            el.setAttribute("style", "display:block; height:" + blockWidth + "px;width:" + blockWidth + "px; position:absolute;border:1px solid #ccc;background:#000;left:" + l + "px;top:" + t + "px");
            return el;
        }
        function createFood() { //创建食物
            var fl = Math.floor(Math.random() * _this.boxWidth) * _this.blockWidth,
            ft = Math.floor(Math.random() * _this.boxHeight) * _this.blockWidth;
            for (var s in snakeBody) { //不允许食物生成在蛇身
                if (parseInt(snakeBody[s].style.left) == fl && parseInt(snakeBody[s].style.top) == ft) {
                    createFood();
                    return;
                }
            }
            foodObj = new block(fl, ft);

        }
        function onEat() { //吃食物
            snakeBody.splice(0, 0, foodObj);
            snakeBox.appendChild(snakeBody[0]);
            createFood();
            snakeBox.appendChild(foodObj)
        }
        function snakeInit() { //蛇身初始化
            for (var s in snakeBody) {
                snakeBox.removeChild(snakeBody[s]);
            }
            snakeBody.splice(0, snakeBody.length);
            snakeBody[0] = new block(parseInt(_this.boxWidth / 2) * _this.blockWidth, (_this.boxHeight - 2) * _this.blockWidth);
            snakeBody[1] = new block(parseInt(_this.boxWidth / 2) * _this.blockWidth, (_this.boxHeight - 1) * _this.blockWidth);
            snakeBox.appendChild(snakeBody[0]);
            snakeBox.appendChild(snakeBody[1])
        }
        function gameOver() {
            clearInterval(start);
            alert("Game Over");
            snakeInit();

        }
        function isInBox(head) { //判断是否在容器内
            var headLeft = parseInt(head.style.left),
            headTop = parseInt(head.style.top);
            return (headLeft >= 0 && headTop >= 0 && headLeft <= _this.blockWidth * (_this.boxWidth - 1) && headTop <= _this.blockWidth * (_this.boxHeight - 1))
        }
        function getNewHead(l, t) {
            return new block(l, t);
        }

        function snakeGo() { //蛇身运动
            var newHead = [getNewHead(parseInt(snakeBody[0].style.left), parseInt(snakeBody[0].style.top) - _this.blockWidth), getNewHead(parseInt(snakeBody[0].style.left) - _this.blockWidth, parseInt(snakeBody[0].style.top)), getNewHead(parseInt(snakeBody[0].style.left), parseInt(snakeBody[0].style.top) + _this.blockWidth), getNewHead(parseInt(snakeBody[0].style.left) + _this.blockWidth, parseInt(snakeBody[0].style.top))][direction] //蛇头位置;

            if (newHead.style.left == foodObj.style.left && newHead.style.top == foodObj.style.top) { //监听食物
                onEat();
            } else {
                for (var s in snakeBody) { //与自身相撞
                    if (snakeBody[s].style.left == newHead.style.left && snakeBody[s].style.top == newHead.style.top) {
                        gameOver();
                        return false
                    }
                }
                if (!isInBox(newHead)) { //与容器边界相撞
                    gameOver();
                    return false
                }
                snakeBox.removeChild(snakeBody[snakeBody.length - 1]);
                snakeBody.pop();
                snakeBody.splice(0, 0, newHead);
                snakeBox.appendChild(snakeBody[0]);
                moveFinish = direction; //完成移动
            }
        }

        function keyPress(code) {
            if (moveFinish != direction) return false; //判断上一个移动是否完
    keyJson={37 : direction == 3 ? 3 : 1,38 : direction == 2 ? 2 : 0,39 : direction == 1 ? 1 : 3,40 : direction == 0 ? 0 : 2}
    if(code in keyJson)direction =  keyJson[code]; //不允许直接向后转
        }
        this.init = function() { //初始化
            snakeBox.style.width = this.boxWidth * this.blockWidth + "px";
            snakeBox.style.height = this.boxHeight * this.blockWidth + "px";
            snakeBox.style.border = "1px solid red";
            snakeBox.style.position = "relative";
            snakeInit(); //此处应先初始化蛇身。以避免生成的食物与蛇身重叠
   createFood();
            snakeBox.appendChild(foodObj);
         
            document.documentElement.onkeydown = function(e) {
                var e = e || event;
                var code = e.keyCode;
        keyPress(code);
            }
            return snakeBox
        }
        this.gameStart = function() {
            start = setInterval(snakeGo, _this.speed);
        }
        this.gameStop = function() {
            clearInterval(start);
        }
    }
    Element.prototype.appendGame = function() {
        var gs = new G.Game();
        this.appendChild(gs.init());
        gs.gameStart();
    }
} ());

