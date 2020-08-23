define(function () {
    var self = this;
    self.drawLine = function (ctx, x1, y1, x2, y2) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    };
    self.drawANDGateInternal = function (ctx, x, y, r, color, isNand) {
        ctx.beginPath();
        ctx.fillStyle = color;

        ctx.arc(x, y, r, 0.5 * Math.PI, 1.5 * Math.PI);
        self.drawLine(ctx, x, y - r, x + 2 * r / 3, y - r);
        self.drawLine(ctx, x, y + r, x + 2 * r / 3, y + r);

        ctx.fillRect(x, y - r, 2 * r / 3, 2 * r);
        self.drawLine(ctx, x + 2 * r / 3, y - r, x + 2 * r / 3, y + r);

        self.drawLine(ctx, x + 2 * r / 3, y - r / 2, x + r, y - r / 2);
        self.drawLine(ctx, x + 2 * r / 3, y + r / 2, x + r, y + r / 2);

        self.drawLine(ctx, x + r, y - r / 2, x + r, y - 1.3 * r);
        self.drawLine(ctx, x + r, y - 1.3 * r, x + 3 * r / 2, y - 1.3 * r);

        self.drawLine(ctx, x + r, y + r / 2, x + r, y + 1.3 * r);
        self.drawLine(ctx, x + r, y + 1.3 * r, x + 3 * r / 2, y + 1.3 * r);
        ctx.fill();
        ctx.stroke();
        if (isNand) {
            ctx.beginPath();
            ctx.arc(x - r - r / 6, y, r / 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }

    self.drawORGateInternal = function (ctx, x, y, r, color, isNand) {

        ctx.beginPath();
        ctx.fillStyle = color;

        ctx.arc(x, y, r, 0.5 * Math.PI, 1.5 * Math.PI);

        self.drawLine(ctx, x, y - r, x, y + r);

        self.drawLine(ctx, x, y - r / 2, x + r, y - r / 2);
        self.drawLine(ctx, x, y + r / 2, x + r, y + r / 2);

        self.drawLine(ctx, x + r, y - r / 2, x + r, y - 1.3 * r);
        self.drawLine(ctx, x + r, y - 1.3 * r, x + 3 * r / 2, y - 1.3 * r);

        self.drawLine(ctx, x + r, y + r / 2, x + r, y + 1.3 * r);
        self.drawLine(ctx, x + r, y + 1.3 * r, x + 3 * r / 2, y + 1.3 * r);
        ctx.fill();
        ctx.stroke();
        if (isNand) {
            ctx.beginPath();
            ctx.arc(x - r - r / 6, y, r / 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    self.drawANDGate = function (ctx, x, y, r, color) {
        self.drawANDGateInternal(ctx, x, y, r, color, false);
    };
    self.drawNANDGate = function (ctx, x, y, r, color) {
        self.drawANDGateInternal(ctx, x, y, r, color, true);
    };
    self.drawORGate = function (ctx, x, y, r, color) {
        self.drawORGateInternal(ctx, x, y, r, color, false);
    };
    self.drawNORGate = function (ctx, x, y, r, color) {
        self.drawORGateInternal(ctx, x, y, r, color, true);
    };
    return{
        drawANDGate: self.drawANDGate,
        drawNANDGate: self.drawNANDGate,
        drawORGate: self.drawORGate,
        drawNORGate: self.drawNORGate
    };
}
);