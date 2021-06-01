import { Component } from "react";
class HelperBot extends Component {
    constructor(props){
        super(props);
        this.state = { 
          callOn: false
        }
      }
    render(){
        return ( <div className="helper-bot">
            Hello, if you require assistance, please provide your name and then select start to initiate a video call.
            <form onSubmit={this.props.startCall}>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <button >Call</button>
            </form>
        </div> );
    }
}
 
export default HelperBot;