import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {Object.keys(options).map(option => {
                return (
                <button type="button" onClick={() => onLeaveFeedback(option)}
                    key={option}
                    className={css.btn} 
                 >
                    {option}
                   
                </button>
            );
            })}
        </div>
            
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;