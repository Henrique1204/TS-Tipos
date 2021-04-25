/* Recomendável */
// Condicional.
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion - só utiliza quando tiver certeza que vai ter o tipo.
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa.';
input.focus();

/* Não Recomendável */
// Non-null assertion.
const body3 = document.querySelector('body')!;
body3.style.background = 'red';

const body4 = (document.querySelector('body') as unknown) as number;
body4.toFixed();
