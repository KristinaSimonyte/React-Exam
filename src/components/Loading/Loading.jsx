import css from './Loading.module.css';

function Loading() {
  return (
    <div className={css.container}>
      <img className={css.img} src='loading_ajax.gif' alt='loading' />
      <h2 className={css.loading}>Loading...</h2>
    </div>
  );
}
export default Loading;
