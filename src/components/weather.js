import React from  'react';

class weather extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            timeDate:'',
            description:''
        }
    }

    render() {

        return(
            <>

          {/* <div >handleClick={this.getWeatherInfo}</div> */}
         <p>{this.state.timeDate}</p>
        <p>{this.state.description}</p>
         
            </>
        )
    }

}

export default weather;