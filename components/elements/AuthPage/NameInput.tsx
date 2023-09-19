import { IAuthPageInput } from '@/types/auth'
import styles from '@/styles/auth/index.module.scss'

const NameInput = ({ register, errors }: IAuthPageInput) => (
  <label className={styles.form__label}>
    <input
      {...register('name', {
        required: 'Enter your name!',
        minLength: 2,
        maxLength: 20,
        pattern: {
          value: /^[a-zA-Zа-яА-ЯёЁїЇіІєЄüÜöÖäÄçÇşŞğĞ]*$/,
          message: 'Invalid value!',
        },
      })}
      className={styles.form__input}
      type="text"
      placeholder="Name"
    />
    {errors.name && (
      <span className={styles.error_alert}>{errors.name?.message}</span>
    )}
    {errors.name && errors.name.type === 'minLength' && (
      <span className={styles.error_alert}>Minimum 2 characters!</span>
    )}
    {errors.name && errors.name.type === 'maxLength' && (
      <span className={styles.error_alert}>No more than 20 characters!</span>
    )}
  </label>
)

export default NameInput
