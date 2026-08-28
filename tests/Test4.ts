const itemPrice = 25;
const quantity = 3;
const total = itemPrice * quantity;

const displayedTotal = '75';

 // console.log(displayedTotal == total);
 // console.log(displayedTotal === total); 

 const isVisible = true;
 const isEnabled = false;
 const isSubmit = isEnabled && isVisible;
 const needAction = !isSubmit || total <= 0;
 console.log ({total , isSubmit , needAction});
