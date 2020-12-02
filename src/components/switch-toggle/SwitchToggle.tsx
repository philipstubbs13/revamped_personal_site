import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface IProps {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
}

export const SwitchToggle = (props: IProps) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.isChecked}
          onChange={props.onChange}
          name={props.name}
        />
      }
      label={props.label}
    />
  )
}

SwitchToggle.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
