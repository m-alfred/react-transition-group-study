/*
 * @Author: alfred
 * @Date: 2020-08-31 19:22:20
  @desc:  滚动数字
 */
import React, { Component } from 'react';

const MIN_INT = 40;

class ProgressiveNum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  componentDidMount() {
    this.rollNum(0, this.props.value, this.props.time);
  }

  stop() {
    this.timer && clearInterval(this.timer);
  }

  rollNum(start, end, time) {
    this.stop();
    const diff = end - start;
    const stepCount = time / MIN_INT;
    // 递增步长
    const step = diff / stepCount;
    console.log('diff:', diff, stepCount, step);

    this.timer = setInterval(() => {
      this.setState((prevState) => {
        const curNum = prevState.num + step;
        if (step >= 0 && curNum >= end) {
          this.stop();
          return { num: end };
        }
        if (step < 0 && curNum <= end) {
          this.stop();
          return { num: end };
        }
        return { num: curNum };
      });
    }, MIN_INT);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      const { time } = nextProps;
      this.rollNum(this.props.value, nextProps.value, time);
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const {
      className,
      fractionDigits,
      remainFraction,
    } = this.props;
    const {
      num,
    } = this.state;

    return (
      <span className={className}>
        {remainFraction ? num.toFixed(fractionDigits) : Number(num.toFixed(fractionDigits))}
      </span>
    );
  }
}

ProgressiveNum.defaultProps = {
  value: 0,
  time: 600,
  // 展示数字的小数位数
  fractionDigits: 0,
  // 小数部分是0，是否保留小数部分
  remainFraction: false,
};
export default ProgressiveNum;
