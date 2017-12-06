import React from "react";
import Table from "../components/Table";

// class HomePage extends Component {

//   render() {
//     //  console.log(this.props.data);
//     return (
//       <div>
//         <Header userName={this.props.userName} />
//         <Table data={this.props.data}/>
//       </div>
//     );
//   }
// }

const HomePage = (props) => {
    return (
      <div>
        <Table data={props.data}/>
      </div>
    );
};

export default HomePage;