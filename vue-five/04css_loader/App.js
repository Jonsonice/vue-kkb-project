import imgSrc from './my.jpg'

var app = {
  data () {
    return {
      imgSrc:imgSrc
    }
  },
  template:`
    <div>
      <img :src="imgSrc">
    </div>
  `
};

export default app;
