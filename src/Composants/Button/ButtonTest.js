import './ButtonTest.css';

function ButtonTest() {
  return (
    <div>
    <a href="#" class="button button--piyo">
        <div class="button__wrapper">
            <span class="button__text">See other promos</span>
        </div>
        <div class="characterBox">
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
            <div class="character">
                <div class="character__face"></div>
            </div>
        </div>
    </a>
</div>
  );
}

export default ButtonTest;
