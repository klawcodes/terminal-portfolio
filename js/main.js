const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const work = document.querySelector('#work');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const workContent = document.querySelector('#work-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'C:/About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#000');
    },
  });
});

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'C:/Contact Me',
    width: '600px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});

work.addEventListener('click', () => {
  const workBox = new WinBox({
    title: 'C:/Work',
    width: '600px',
    height: '400px',
    top: 170,
    right: 50,
    bottom: 50,
    left: 500,
    mount: workContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});
