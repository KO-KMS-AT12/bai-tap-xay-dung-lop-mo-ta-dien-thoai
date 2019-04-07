const LOG = console.log;

function SendMessage() {
    this.getContent = function () {
        return this.content;
    };
    this.getReceiver = function () {
        return this.receiver;
    };
    this.setContent = function (content) {
        this.content = content;
    };
    this.setReceiver = function (receiver) {
        this.receiver = receiver;
    }
}

function ReceiveMessage() {

    this.getContent = function () {
        return this.content;
    };
    this.getSender = function () {
        return this.sender;
    };
    this.setContent = function (content) {
        this.content = content;
    };
    this.setSender = function (sender) {
        this.sender = sender;
    }

}

function SeenMessage() {
    this.loadMessage = function () {
        if (this.content != null || this.sender != null) {
            LOG("Tin nhan den tu " + this.sender + " co noi dung : " + this.content);
        }else {
            LOG("Hop thu rong");
        }
    }
}
