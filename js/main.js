const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '500px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#111111')
    },
    onblur: function () {
      this.setBackground('#111111')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '200px',
    top: 90,
    right: 80,
    bottom: 50,
    left: 30,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#111111')
    },
    onblur: function () {
      this.setBackground('#111111')
    },
  })
})
