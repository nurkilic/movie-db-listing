import { Progress } from "antd";
import { ProgressProps } from "antd/es/progress"; // ProgressProps tipini alıyoruz

interface RatingCircleProps {
  voteAverage: number;
}

const RatingCircle: React.FC<RatingCircleProps> = ({ voteAverage }) => {
  const calculateColor = (score: number): ProgressProps["strokeColor"] => {
    if (score > 6) return "#52c41a"; 
    if (score >= 4) return "#faad14"; 
    if (score === 0) return "#8c8c8c"; 
    return "#f5222d"; // red
  };

  return (
    <Progress
      type="circle"
      className="progress font-bold bg-black rounded-full p-[2px] text-white"
      percent={voteAverage === 0 ? 0 : voteAverage * 10} 
      strokeColor={calculateColor(voteAverage)} 
      format={
        (percent: number | undefined) =>
          voteAverage === 0 ? "NR" : `${(percent || 0).toFixed(0)}` 
      }
      size={35} 
      strokeWidth={7} 
    />
  );
};

export default RatingCircle;
