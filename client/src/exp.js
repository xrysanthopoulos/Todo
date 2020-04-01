/// without super()

class A {
  constructor() {
    this.a = 'hello'
  }
}

class B extends A {
  constructor(){
    console.log(this.a) //throws an error
  }
}

console.log(new B())


/// with super()

class A {
    constructor(props) {
      this.props = props
    }
  }
  
  class B extends A {
    constructor(props) {
      super(props)
      console.log(this.props)
    }
  }
  
  console.log(new B({title: 'hello world'}))


/*  
https://alligator.io/react/constructors-with-react-components/
https://maksimivanov.com/posts/react-lifecycle-methods/
https://www.codingame.com/playgrounds/8747/react-lifecycle-methods-render-and-componentdidmount
*/
