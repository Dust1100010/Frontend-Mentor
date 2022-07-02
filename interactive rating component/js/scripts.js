const submit_btn = document.querySelector('.submit');
const card_content_1 = document.querySelector('.card-content-1');
const card_content_2 = document.querySelector('.card-content-2');
const rateNums = document.querySelectorAll('.rate--num');
const score = document.querySelector('.score');
let stars_score = 3


submit_btn.addEventListener('click', onSubmit);
rateNums.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
    card_content_2.classList.remove('hide');
    card_content_1.classList.add('hide');
    score.textContent = stars_score;

}

function handleRatingBtnClick() {
    rateNums.forEach(btn => {
        btn.classList.remove('next-to');
    });

    if (event.target.classList.contains('rate--num')) {
        event.target.classList.add('next-to');
    } else {
        event.target.parentElement.classList.add('active');
    }

    stars_score = event.target.textContent;
}