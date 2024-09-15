export const maxLineHeight = 170;
export const minLineHeight = 30;

export const castMinigameTemplate = /*html*/ `
<div id="cast-minigame" class="minigame-container" style="display: flex; width: 400px">
  <div style="float:left; width: 200px">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Vertical line shadow -->
      <line x1="100" y1="20" x2="100" y2="180" stroke="#000" stroke-width="4" />

      <!-- Vertical line -->
      <line x1="100" y1="20" x2="100" y2="180" stroke="#fff" stroke-width="2" />
      <!-- Upward arrow -->
      <path
        d="M90 30 L100 20 L110 30"
        fill="none"
        stroke="#888"
        stroke-width="4"
      />
      <path
        d="M90 30 L100 20 L110 30"
        fill="none"
        stroke="white"
        stroke-width="2"
      />
      <!-- Downward arrow -->
      <path
        d="M90 170 L100 180 L110 170"
        fill="none"
        stroke="#888"
        stroke-width="4"
      />
      <path
        d="M90 170 L100 180 L110 170"
        fill="none"
        stroke="white"
        stroke-width="2"
      />
      <!-- Circle indicator -->
      <circle cx="100" cy=${maxLineHeight} r="5" fill="#dddd00" class="castDistanceIndicator" />
      <circle
        class="castDistanceIndicator"
        cx="100"
        cy=${maxLineHeight}
        r="5"
        fill="#dddd00"
        stroke="#888"
        stroke-width="1"
      />

      <text x="120" y=${maxLineHeight} class="toast" fill="#ffffff"></text>
    </svg>
    </div>

    <div style="float:right; width: 200px">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style>
                    .cls-1 {
                        fill-rule: evenodd;
                        fill: #fff;
                        opacity: 0.9;
                        transform: translate(2rem, 5.5rem);
                    }

                    .catchTooltip {
                        display: none;
                    }
                </style>
            </defs>

            <rect
            rx="2"
            ry="2"
            x="0"
            y="80"
            width="30"
            height="30"
            fill="black"
            stroke="black"
            />

            <rect
            rx="2"
            ry="2"
            x="0"
            y="80"
            width="30"
            height="30"
            fill="none"
            stroke="white"
            stroke-width="1"
            />

            <text x="15" y="95" fill="#ffffff" dominant-baseline="middle" text-anchor="middle" style="font-size: 20px; font-weight: bold; font-family: Arial">
                E
            </text>

            <text x="100" y="95" fill="#ffffff" dominant-baseline="middle" text-anchor="middle" style="font-size: 13px; font-weight: bold; font-family: Arial; letter-spacing: 1px">
                (PARA LANÇAR)
            </text>
        </svg>
    </div>
</div>`;
