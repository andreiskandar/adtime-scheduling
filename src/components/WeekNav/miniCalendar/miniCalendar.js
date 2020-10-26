import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode,
);