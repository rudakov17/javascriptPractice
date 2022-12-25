// задание 4
let totalPower = 0;

// прототип устройства, с возможностью подключения к сети
class Devices {
  constructor(device, power) {
    this.device = device;
    this.power = power;
    this.condition = false;
    this.onOff = function (switcher) {
      if (switcher === true) {
        this.condition = false;
        this.getPower();
      } else {
        this.condition = true;
        this.getPower();
      }
      console.log(
        `${this.device} is ${this.condition === true ? 'on' : 'off'}`
      );
    };
    this.getPower = function () {
      if (this.condition === true) {
        totalPower += this.power;
      } else {
        totalPower = totalPower - this.power;
      }
    };
  }
}

// прототип лампы
class Lamp extends Devices {
  constructor(device, power, color, height) {
    super(device, power);
    this.color = color;
    this.height = height;
  }
}

// ...и создал Бог лампу...
const lamp = new Lamp('lamp', 50, 'bloody', 666);

const computer = new Devices('computer', 800);
const tv = new Devices('tv', 200);

const on = false;
const off = true;

computer.onOff(on);
tv.onOff(on);
computer.onOff(off);
lamp.onOff(on);
console.log(totalPower);
