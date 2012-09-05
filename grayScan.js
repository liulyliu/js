(function() {
       
    $.fn.grayScan = function(options) {

        var _config = {
            direction: 'top',
            timer: 10
        },
        T = null;

        $.extend(_config, options);

        function grayscale(src) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var imgObj = new Image();
            imgObj.src = src;
            canvas.width = imgObj.width;
            canvas.height = imgObj.height;
            ctx.drawImage(imgObj, 0, 0);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (var y = 0; y < imgPixels.height; y++) {
                for (var x = 0; x < imgPixels.width; x++) {
                    var i = (y * 4) * imgPixels.width + x * 4;
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }
            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
            return canvas.toDataURL();
        }

        function movehandle(e) {
            var self = this;
            if (T) clearTimeout(T);
            T = setTimeout(function() {
                var x = e.clientX - $(self).offset().left,
                y = e.clientY - $(self).offset().top;
                var mask = $(self).closest('.wrap').find('.J_mask');
                if (_config.direction == 'left') mask.width(x);
                else if (_config.direction == 'top') mask.height(y);
            },
            _config.timer);
        }

        $(this).each(function() {
            var src = $(this).attr('src'),
            height = $(this).height(),
            width = $(this).width();
            if (_config.direction == 'left') width = 0;
            else if (_config.direction == 'top') height = 0;
            $(this).wrap("<div class='wrap' style='display:inline-block'>").clone().attr('class', 'J_Clone').insertBefore(
            $(this).closest('.wrap').find('.J_Clone').wrap('<div class="J_mask" style="overflow:hidden;height:' + height +
            $(this).attr('src', grayscale(src));
            $(this).bind('mousemove', movehandle);
            $(this).closest('.wrap').find('.J_mask').bind('mousemove', movehandle);
        });
        return this;
    };
})();
