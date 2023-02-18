import { FormInputLabelSty, InputSty, GroupSty } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupSty>
      <InputSty {...otherProps} />
      {label && (
        <FormInputLabelSty shrink={otherProps.value.length}>
          {label}
        </FormInputLabelSty>
      )}
    </GroupSty>
  );
};

export default FormInput;

