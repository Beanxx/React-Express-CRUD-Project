import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonStyle = Template.bind({});

ButtonStyle.args = {
  title: "저장",
};
