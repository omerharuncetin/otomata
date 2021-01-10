import React from 'react'
import { Input } from 'antd';


class NumericInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?[1-5]*(\.[1-5]*)?$/;
        const numbersUnwilling = ['6','7','8','9','0']
        numbersUnwilling.map(x => value.replace(x,''))
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.


    render() {
        return (
            <Input
                {...this.props}
                onChange={this.onChange}
                onBlur={this.onBlur}
                placeholder="Input a number"
                maxLength={25}
            />
        );
    }
}
export default NumericInput