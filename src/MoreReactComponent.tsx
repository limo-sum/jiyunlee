export interface HeadingProps {
  title: string;
}
export const Heading = ({ title }: HeadingProps) => {
  return <h1>{title}</h1>;
};

const MoreReactComponent = () => {
  return <Heading title="hello" />;
};

export default MoreReactComponent;
