import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const PhoneInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <span>Phone *</span>
    <input
      className={styles.feedback_form__form__input}
      placeholder="+37 999 999 999"
      type="tel"
      {...register('phone', {
        required: 'Enter phone!',
        pattern: {
          value: /^\d*[1-9]\d*$/,
          message: 'Invalid value',
        },
        minLength: 11,
        maxLength: 11,
      })}
    />
    {errors.phone && (
      <span className={styles.error_alert}>{errors.phone?.message}</span>
    )}
    {errors.phone && errors.phone.type === 'minLength' && (
      <span className={styles.error_alert}>Minimum 11 digits!</span>
    )}
    {errors.phone && errors.phone.type === 'maxLength' && (
      <span className={styles.error_alert}>No more than 11 digits!</span>
    )}
  </label>
)

export default PhoneInput
