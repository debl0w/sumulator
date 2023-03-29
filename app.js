const app = new Vue({
  data() {
    return {
      cash: 100,
      params: {
        day: 1,
        satiety: 25,
        status: "новичок",
        liver: 25,
        drunk: 25,
      },
      death: { text: null, type: null },
      noty: { mess: null, type: null },
      page: "rabota",
      alkashka: [
        {
          id: 1,
          img: "https://mix-tochka.ru/image/cache/catalog/napitki/kvas-400x400.png",
          op: 8,
          text: "Квас",
          price: 10,
        },
        {
          id: 2,
          img: "https://i.pinimg.com/originals/b7/33/1b/b7331b7e06f48e4384f2594e34b1e8bc.png",
          op: 35,
          text: "Пиво",
          price: 30,
        },
        {
          id: 3,
          img: "https://pngimg.com/uploads/vodka/vodka_PNG73896.png",
          op: 60,
          text: "Водка",
          price: 70,
        },
        {
          id: 3,
          img: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614584821_10-p-vino-na-belom-fone-11.png",
          op: 100,
          text: "Вино",
          price: 300,
        },
        {
          id: 3,
          img: "https://www.pngplay.com/wp-content/uploads/15/Martini-Rosso-Bottle-Transparent-File.png",
          op: 100,
          text: "Мортини",
          price: 300,
        },
        {
          id: 3,
          img: "https://stihi.ru/pics/2021/04/24/4480.jpg",
          op: 100,
          text: "Бражка",
          price: 300,
        },
      ],
      rabota: [
        {
          id: 1,
          img: "https://ic.pics.livejournal.com/grishin_arhip/87617121/6465/6465_original.png",
          op: 2,
          day: 1,
          text: "Попрошайничать",
          price1: 1,
          price2: 15,
        },
        {
          id: 2,
          img: "https://sun9-78.userapi.com/impg/UMiBBWgTvk5J2hdKoRdfxrYk5D956bDhizwemw/pHIa9q6qUQ8.jpg?size=1280x853&quality=96&sign=8afcb9899bee4b35a065931f2dd65d3a&c_uniq_tag=oy1HZr5onnrT-UVi13OGoYaojI0-hqz9X8giEhD9PIk&type=album",
          op: 5,
          day: 1,
          text: "Уборщик",
          price1: 20,
          price2: 25,
        },
        {
          id: 3,
          img: "https://sun9-70.userapi.com/impg/ZTwg1jdSRKpYOL0GQsbEnTvbxfvlLjqTrotyfw/sKdH6R4-mTk.jpg?size=1200x900&quality=96&sign=d535e1528d3e63b3a96d1456eba19e3e&type=album",
          op: 30,
          day: 1,
          text: "Проституция",
          price1: 50,
          price2: 100,
        },
        {
          id: 3,
          img: "https://sun9-66.userapi.com/impg/Q94d09fYtrlMtiikJsXInJalHNnJfxzIqueLcA/ACuNjV9QxXM.jpg?size=1000x769&quality=96&sign=b05392609eedf3c6c0150a80206d71f0&type=album",
          op: 35,
          day: 1,
          text: "В цирк",
          price1: 50,
          price2: 150,
        },
        {
          id: 3,
          img: "https://sun9-1.userapi.com/impg/WoJySCMjYytcKzzn4OXYhoEDdEF2RP49W5ktww/bR6tuP_lbsA.jpg?size=526x479&quality=96&sign=8f9d087cecf718301f2b68df11a502d7&type=album",
          op: 50,
          day: 1,
          text: "Стримить",
          price1: 100,
          price2: 250,
        },
        {
          id: 3,
          img: "https://sun9-34.userapi.com/impg/I-FGnnawnR4vRduDvN4WrogjLxfLmkJef51oLw/syDU0fYC8BI.jpg?size=960x1280&quality=96&sign=bfd2499cbb40fc17068af78eaf17e0b1&type=album",
          op: 70,
          day: 1,
          text: "Продажа",
          price1: 200,
          price2: 400,
        },
      ],
      jratva: [
        {
          id: 1,
          img: "https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-461.png",
          text: "Кусок хлеба",
          op: 4,
          price: 7,
        },
        {
          id: 2,
          img: "https://scdn.utkonos.ru/resample/900x900q90/photo/342179/84aeb092b636aec4.png",
          text: "Роллтон",
          op: 8,
          price: 30,
        },
        {
          id: 3,
          img: "https://petfood.ru/upload/iblock/163/ce12e90d-0fc2-45fb-8ce7-a2be39a05b54_3212fcf4-594b-11e9-a76d-1803737fe1fb.jpg",
          text: "Корм для кисок",
          op: 10,
          price: 120,
        },
        {
          id: 4,
          img: "https://podacha-blud.com/uploads/posts/2022-12/1670424439_5-podacha-blud-com-p-salat-tsezar-v-tarelke-foto-6.png",
          text: "Цезарь",
          op: 30,
          price: 200,
        },
        {
          id: 5,
          img: "https://pluspng.com/img-png/burger-png--2960.png",
          text: "Бургер",
          op: 50,
          price: 300,
        },
        {
          id: 6,
          img: "https://i.pinimg.com/originals/9e/7c/79/9e7c7991356509e1d3f84f72e7f22131.png",
          text: "Поросенок",
          op: 100,
          price: 500,
        },
      ],
      apteka: [
        {
          id: 1,
          img: "https://medicamente.md/files/product/2286.png",
          text: "Аскорбинка",
          price: 5,
          op: 2,
        },
      ],
    };
  },
  computed: {
    satiety() {
      return this.params.satiety;
    },
    day() {
      return this.params.day;
    },
    drunk() {
      return this.params.drunk;
    },
    liver() {
      return this.params.liver;
    },
  },
  watch: {
    satiety() {
      if (this.params.satiety > 100) {
        return (this.params.satiety = 100);
      }
      if (this.params.satiety < 0) {
        return (this.params.satiety = 0);
      }
    },
    drunk() {
      if (this.params.drunk > 100) {
        return (this.params.drunk = 100);
      }
      if (this.params.drunk < 0) {
        return (this.params.drunk = 0);
      }
    },
    liver() {
      if (this.params.liver > 100) {
        return (this.params.liver = 100);
      }
      if (this.params.liver < 0) {
        return (this.params.liver = 0);
      }
    },
  },
  methods: {
    getRand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    rabotaYes(item) {
      if (this.death.type) return;
      this.clearClick();
      if (this.params.satiety < item.op) {
        this.noty.mess = "Сытость на нуле!!!";
        this.noty.type = "error";
        return;
      }
      if (this.params.satiety >= item.op) {
        this.cash += this.getRand(item.price1, item.price2);
        this.params.satiety -= item.op;
        this.params.day += item.day;
        this.params.drunk -= this.getRand(1, 3);
      } else {
        this.noty.mess = "Не хватает сытости...";
        this.noty.type = "error";
      }
    },
    jratvaYes(item) {
      if (this.death.type) return;
      this.clearClick();
      if (this.cash >= item.price) {
        if (this.params.satiety >= 100) {
          this.noty.mess = "Ты сыт, еблан";
          this.noty.type = "error";
          return;
        }
        this.params.satiety += item.op;
        this.cash -= item.price;
      } else {
        this.noty.mess = "Пиздуй работать, недостаточно средств!";
        this.noty.type = "error";
      }
    },
    alkashkaYes(item) {
      if (this.death.type) return;
      this.clearClick();
      if (this.cash >= item.price) {
        this.params.drunk += item.op;
        this.cash -= item.price;
        this.params.liver -= this.getRand(1, 2);
      } else {
        this.noty.mess = "Пиздуй работать, недостаточно средств!";
        this.noty.type = "error";
      }
    },
    aptekaYes(item) {
      if (this.death.type) return;
      this.clearClick();
      if (this.cash >= item.price) {
        this.params.liver += item.op;
        this.cash -= item.price;
        this.params.liver += this.getRand(1, 5);
      } else {
        this.noty.mess = "Пиздуй работать, недостаточно средств!";
        this.noty.type = "error";
      }
    },
    clearClick() {
      this.noty.mess = null;
      this.noty.type = null;
    },
    indicators() {
      if (this.params.drunk <= 0) {
        this.death.text = "Ты сдох трезвым, соболезную";
        this.death.type = true;
        console.log("4343");
      }
      if (this.params.satiety <= 0) {
        this.death.text = "Ты сдох от голода, соболезную";
        this.death.type = true;
      }
      if (this.params.liver <= 0) {
        this.death.text = "Печень отказала, соболезную";
        this.death.type = true;
      }
      if (this.params.day > 50) {
        this.params.status = "Долбаеб";
      }
    },
    reload() {
      window.location.reload();
    },
  },
  mounted() {
    setInterval(() => {
      this.indicators();
    }, 100);
  },
});
app.$mount("#root");
