import { useForm } from 'react-hook-form';
import formStyle from './styles.module.css';
import buttonIcon from '../images/buttonIcon.webp';

function Form() {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm();
	function formValue(value) {
		console.log(value);
	}
	return (
		<div className={formStyle.container}>
			<form className={formStyle.formBlock} onSubmit={handleSubmit(formValue)}>
				<div className={formStyle.formInputs}>
					<div>
						<input {...register('name', { required: true })} type="text" placeholder="Ваше имя*" />
						{errors.name && <span>This field is required!!!!</span>}
					</div>
					<input {...register('phone')} type="text" placeholder="Телефон" />
					<input {...register('mail')} type="email" placeholder="Электронная почта*" />
					<textarea {...register('message')} placeholder="Текст сообщения*" />
				</div>
				<div className={formStyle.checkbox}>
					<p>*обязательные поля</p>
					<input type="checkbox" name="checkbox" id="" />
					<span>
						Я согласен(-на) с
						{' '}
						<strong>правилами</strong>
						{' '}
						о обработке моих персональных данных
					</span>
				</div>
				<button className={formStyle.button} type="submit">
					<img className={formStyle.buttonImg} src={buttonIcon} alt="buttonIcon" />
					<span>Отправить сообщение</span>
				</button>
			</form>
		</div>
	);
}

export default Form;
