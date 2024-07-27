function carSimulator(marka, model, kilometre, fiyat) {
  /* kodlar buraya */
  const simulator = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice: function () {
      return 'Arabanın güncel piyasa değeri ' + this.fiyat + " TL'dir.";
    },
    refuel: function (percentage) {
      if (percentage + this.depo > 100) {
        this.depo = 100;
        return 'Depo %' + this.depo + ' doludur.';
      }
      this.depo += percentage;
      return 'Depo %' + this.depo + ' doludur.';
    },
    drive: function (km) {
      this.kilometre += km;
      let gas = 5 * (km / 100);
      this.depo -= gas;
      this.fiyat -= gas * 10;
      return "Araba'nın güncel kilometresi: " + this.kilometre;
    },
  };

  return simulator;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = carSimulator;
