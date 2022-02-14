import React, { Component } from 'react'
const Subject =(STUDENT)=>{
    class HOC extends Component {
        render() {
            return (
                <div>
                    <STUDENT hocsub="java" />
                </div>
            )
        }
    }
    return HOC;
}

export default Subject;
