/*
 * @Author: alfred
 * @Date: 2020-08-31 19:22:20
  @desc:  滚动数字
 */
import React, { Component } from 'react';
import './index.less';

class AnimationNum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: this.props.list[0] && ''
    };
  }

  componentDidMount() {
    this.rollNum(this.props.list, this.props.time);
  }

  stop() {
    this.timer && clearInterval(this.timer);
  }

  rollNum(list, time) {
    this.stop();
    const stepCount = list.length;
    let idx = 0;
    const INT = time / stepCount;

    this.timer = setInterval(() => {
      this.setState({
        num: list[idx]
      });
      idx ++;
      if (idx >= list.length) {
        this.stop();
      }
    }, INT);
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const {
      className,
    } = this.props;
    const {
      num,
    } = this.state;

    return (
      <span className={className}>
        <ul className='num-list'>
          <li className='num-item'>{num}</li>
        </ul>
      </span>
    );
  }
}

AnimationNum.defaultProps = {
  list: [],
  time: 600,
};
export default AnimationNum;
