import React, { Component } from 'react';
import './App.css';
import myImage from './assets/kings.jpg'; // Make sure this path is correct

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Egwu Kingsley",
        gender: "Male",
        bio: "25th October",
        profession: "Project Manager and Software Developer",
        imgSrc: myImage, // Use the imported image variable
      },
      show: false,
      mountedTime: Date.now(), // Initialize with the current timestamp
    };
  }

  componentDidMount() {
    // Start the interval to update the elapsed time
    this.interval = setInterval(() => {
      this.forceUpdate(); // Force a re-render every second to update the elapsed time
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval to avoid memory leaks
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    // Calculate the elapsed time since the component was mounted
    const elapsedTime = Math.round((Date.now() - mountedTime) / 1000);

    return (
      <div className="App flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Class-based Component with Vite</h1>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
          onClick={this.toggleShow}
        >
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {show && (
          <div className="flex flex-col justify-center items-center profile bg-gray-900 w-64 w-72 p-4 rounded-md shadow-xl">
            {person.imgSrc && <img src={person.imgSrc} alt="Profile" className='rounded -z-0 shadow-xl items-center justify-center w-40 h-40' />}
            <h2 className="text-xl font-bold text-white">{person.name}</h2>
            <p className='text-white'>{person.gender}</p>
            <p className='text-white'>{person.bio}</p>
            <p className='text-white'>{person.profession}</p>

            
          </div>
        )}

        <p className="mt-4">Time since mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;


