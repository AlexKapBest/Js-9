/* Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров. */


let carInfo = function(Marka, Number, status, transfers, speed, km) {

  this.Marka = Marka;
  this.Number = Number;
  this.status = status;       
  this.transfers = transfers;  
  this.speed = speed;          
  this.km = km;                

  this.setInfo = function(Marka, Number) {
	  console.log(`Марка: ${this.Marka}. Номер: ${this.Number}`);
  };

  this.startEngine = function() { 
	  this.status = "on"; 
	  console.log(`Двигатель включен`);
  };

  this.stopEngine  = function() { 
	  this.status = "off"; 
	  console.log(`Двигатель выключен`);
  };

  this.forward = function() {
	  this.transfers = "передняя";
	  console.log(`Передача: ${this.transfers}`)
  };

  this.back = function() {
	  this.transfers = "задняя";
	  console.log(`Передача: ${this.transfers}`)
  };

  this.neutral = function() {
	  this.transfers = "нейтральная";
	  console.log(`Передача: ${this.transfers}`)
  };

  this.setSpeed = function(speed) {
	  this.speed = speed;
	  console.log(`Скорость: ${this.speed} км/ч`)
  };

  this.drive = function(hours) {

  let addedSpeed = 0;

	if (this.status === "on" && this.transfers === "передняя") {
		addedSpeed = this.speed * hours;
	} else if (this.status === "on" && this.transfers === "задняя") {
		addedSpeed = this.speed * hours;
	} else if (this.transfers === "нейтральная") {
		addedSpeed = 0; 
	} else {
		console.log(`Двигатель выключен или передача не включена!`)
	}

    this.km = this.km + addedSpeed;

    console.log(`Проехали за ${hours} ч: +${addedSpeed} км. Итоговый пробег: ${this.km} км, текущая передача: ${this.transfers}, скорость была: ${this.speed} км/ч`);

  };

};

let car = new carInfo("Audi", "A123BC", "off", "нейтральная", 0, 0);


console.log(car);
