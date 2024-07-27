const carSimulator = require('./index.js');
// const carSimulator = require('./solution.js');

describe('Araba Simülatörü Testleri', () => {
  const result = carSimulator('VW', 'Passat', 158000, 850000);

  test('Fonksiyonun dönüş değeri nesne mi?', () => {
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).not.toBe(true); //Nesne olmalı, Array değil
  });

  test('Gelen tüm parametreler araba nesnesine eklenmiş mi?', () => {
    expect(result).toHaveProperty('marka');
    expect(result).toHaveProperty('model');
    expect(result).toHaveProperty('kilometre');
    expect(result).toHaveProperty('fiyat');
  });

  test('Depo özelliği tanımlanmış mı?', () => {
    expect(result).toHaveProperty('depo');
  });

  test('Depo özelliğinin değeri 50 tanımlanmış mı?', () => {
    expect(result).toHaveProperty('depo', 50);
  });

  test('getPrice metodu eklenmiş mi?', () => {
    expect(typeof result.getPrice).toBe('function');
  });

  test('getPrice metodu doğru değeri dönüyor mu?', () => {
    expect(result.getPrice()).toBe("Arabanın güncel piyasa değeri 850000 TL'dir.");
  });

  test('refuel metodu eklenmiş mi?', () => {
    expect(typeof result.refuel).toBe('function');
  });

  test('refuel metodu depo değerini artırıyor mu?', () => {
    const result = carSimulator('VW', 'Passat', 158000, 850000);
    result.refuel(20);
    expect(result.depo).toBe(70);
  });

  test('refuel metodu güncel depo değerini dönüyor mu?', () => {
    const result = carSimulator('VW', 'Passat', 158000, 850000);
    const refuelRes = result.refuel(5);
    expect(refuelRes).toBe('Depo %55 doludur.');
  });

  test("refuel metodu depo değerini 100'de sınırlıyor mu?", () => {
    const result = carSimulator('VW', 'Passat', 158000, 850000);
    result.refuel(90);
    expect(result.depo).toBe(100);
  });

  test('drive metodu eklenmiş mi?', () => {
    expect(typeof result.drive).toBe('function');
  });

  test('drive metodu kilometre değerini artırıyor mu?', () => {
    const result = carSimulator('VW', 'Passat', 158000, 850000);
    result.drive(100);
    expect(result.kilometre).toBe(158100);
  });

  test('refuel metodu fiyatı düşürüyor mu?', () => {
    const result = carSimulator('VW', 'Passat', 158000, 850000);
    result.drive(100);
    expect(result.fiyat).toBe(849950);
  });

  test('refuel metodu depo değerini güncelliyor mu?', () => {
    const result = carSimulator('VW', 'Passat', 158000, 850000);
    result.drive(100);
    expect(result.depo).toBe(45);
  });
});