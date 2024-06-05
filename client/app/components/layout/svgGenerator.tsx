interface SvgProps {
  color: string
}

export const svgGenerator = {
  dashboardSvg: ({ color }: SvgProps) => (
    <svg
      width='19'
      height='22'
      viewBox='0 0 19 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.86472 0.827148H15.2005M2.53845 3.68754H16.4616'
        stroke={color}
        strokeWidth='1.044'
      />
      <rect
        x='1.022'
        y='6.27639'
        width='16.956'
        height='14.556'
        rx='1.56599'
        stroke={color}
        strokeWidth='1.044'
      />
    </svg>
  ),

  coursesSvg: ({ color }: SvgProps) => (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.5 3.72705H8.5C9.56087 3.72705 10.5783 4.14848 11.3284 4.89862C12.0786 5.64877 12.5 6.66618 12.5 7.72705V21.7271C12.5 20.9314 12.1839 20.1683 11.6213 19.6057C11.0587 19.0431 10.2956 18.7271 9.5 18.7271H2.5V3.72705Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.5 3.72705H16.5C15.4391 3.72705 14.4217 4.14848 13.6716 4.89862C12.9214 5.64877 12.5 6.66618 12.5 7.72705V21.7271C12.5 20.9314 12.8161 20.1683 13.3787 19.6057C13.9413 19.0431 14.7044 18.7271 15.5 18.7271H22.5V3.72705Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),

  wishlistSvg: ({ color }: SvgProps) => (
    <svg
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      width='25px'
      height='25px'
      viewBox='-2 0 40 32'
    >
      <g>
        <path
          fill={color}
          stroke={color}
          strokeWidth='0.5'
          d='M27,0c-2.476,0-4.856,0.921-6.704,2.595C19.594,3.23,18.993,3.952,18.5,4.749
		c-0.493-0.797-1.094-1.519-1.796-2.155C14.856,0.921,12.476,0,10,0C4.486,0,0,4.486,0,10c0,3.722,1.158,6.66,3.871,9.825
		c3.942,4.6,13.919,11.62,14.342,11.917c0.086,0.061,0.187,0.091,0.287,0.091s0.201-0.03,0.287-0.091
		c0.423-0.297,10.4-7.317,14.343-11.917C35.842,16.66,37,13.722,37,10C37,4.486,32.514,0,27,0z M32.371,19.175
		C28.876,23.251,20.191,29.516,18.5,30.72c-1.691-1.204-10.376-7.469-13.87-11.545C2.085,16.206,1,13.462,1,10c0-4.963,4.038-9,9-9
		c2.227,0,4.37,0.829,6.032,2.335c0.838,0.76,1.518,1.656,2.02,2.664c0.17,0.34,0.726,0.34,0.896,0
		c0.502-1.008,1.182-1.904,2.02-2.663C22.63,1.829,24.773,1,27,1c4.962,0,9,4.037,9,9C36,13.462,34.915,16.206,32.371,19.175z'
        />
      </g>
    </svg>
  ),

  chatSvg: ({ color }: SvgProps) => (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.2143 9.89593H11.3572M19.3572 4.18164C19.9634 4.18164 20.5448 4.42246 20.9734 4.85111C21.4021 5.27977 21.6429 5.86115 21.6429 6.46736V17.8959C21.6429 18.5021 21.4021 19.0835 20.9734 19.5122C20.5448 19.9408 19.9634 20.1816 19.3572 20.1816L15.9298 20.1805L13.308 22.8022C13.1112 22.999 12.8494 23.1172 12.5717 23.1347C12.2939 23.1521 12.0194 23.0676 11.7995 22.8971L11.692 22.8022L9.07032 20.1805L5.64289 20.1816C5.03668 20.1816 4.4553 19.9408 4.02665 19.5122C3.59799 19.0835 3.35718 18.5021 3.35718 17.8959V6.46736C3.35718 5.86115 3.59799 5.27977 4.02665 4.85111C4.4553 4.42246 5.03668 4.18164 5.64289 4.18164H19.3572Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.92773 11.0386C8.49915 11.0386 9.07058 10.4672 9.07058 9.89579C9.07058 9.32436 8.49915 8.75293 7.92773 8.75293C7.3563 8.75293 6.78601 9.32436 6.78601 9.89579C6.78601 10.4672 7.3563 11.0386 7.92773 11.0386ZM7.92773 15.6101C8.49915 15.6101 9.07058 15.0386 9.07058 14.4672C9.07058 13.8958 8.49915 13.3244 7.92773 13.3244C7.3563 13.3244 6.78601 13.8958 6.78601 14.4672C6.78601 15.0386 7.3563 15.6101 7.92773 15.6101Z'
        fill={color}
      />
      <path
        d='M18.2146 14.4673H11.3574'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),

  settingsSvg: ({ color }: SvgProps) => (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_3426_12694)'>
        <path
          d='M21.7655 1.37924C21.8079 1.33666 21.8395 1.28453 21.8575 1.22723C21.8755 1.16992 21.8796 1.10912 21.8692 1.04995C21.8588 0.990771 21.8344 0.934952 21.798 0.887189C21.7615 0.839426 21.7141 0.801116 21.6598 0.775486C20.8217 0.379711 19.8817 0.253099 18.9688 0.413039C18.0559 0.572979 17.2149 1.01163 16.5613 1.66874C15.2878 2.95049 14.843 4.96349 15.437 6.64649L6.7828 15.3007C6.30201 15.1312 5.79558 15.046 5.2858 15.0487C4.0003 15.0487 2.7538 15.5602 1.86655 16.4527C1.21526 17.1012 0.775056 17.9313 0.60362 18.8343C0.432183 19.7372 0.537509 20.6709 0.905797 21.513C0.929937 21.5694 0.967586 21.6189 1.01542 21.6573C1.06325 21.6957 1.1198 21.7217 1.18006 21.733C1.24033 21.7444 1.30246 21.7407 1.36097 21.7223C1.41948 21.704 1.47257 21.6715 1.51555 21.6277L4.1338 18.996C4.3063 18.822 4.58455 18.7987 4.72855 18.945L5.8588 20.1277C6.02305 20.2935 6.01555 20.5492 5.8423 20.724L3.2338 23.349C3.1914 23.3915 3.15986 23.4436 3.14181 23.5008C3.12377 23.5581 3.11977 23.6188 3.13014 23.6779C3.14051 23.7371 3.16494 23.7928 3.20139 23.8405C3.23784 23.8882 3.28522 23.9264 3.33955 23.952C3.94649 24.2415 4.61033 24.3922 5.2828 24.393C6.4618 24.393 7.58155 23.919 8.43805 23.058C9.71155 21.777 10.1563 19.764 9.56155 18.081L18.2158 9.42599C18.6969 9.59542 19.2035 9.68066 19.7135 9.67799C20.999 9.67799 22.2455 9.16649 23.1328 8.27399C23.7841 7.6255 24.2243 6.79539 24.3957 5.89244C24.5672 4.98948 24.4618 4.0558 24.0935 3.21374C24.0694 3.15736 24.0318 3.1078 23.9839 3.06943C23.9361 3.03106 23.8795 3.00505 23.8193 2.99371C23.759 2.98237 23.6969 2.98604 23.6384 3.0044C23.5799 3.02276 23.5268 3.05525 23.4838 3.09899L20.8655 5.73074C20.7846 5.80893 20.6761 5.85202 20.5636 5.85062C20.4511 5.84921 20.3437 5.80343 20.2648 5.72324L19.1405 4.59899C19.1004 4.56048 19.0685 4.51428 19.0467 4.46314C19.0248 4.41201 19.0136 4.357 19.0135 4.3014C19.0134 4.2458 19.0246 4.19075 19.0463 4.13956C19.068 4.08837 19.0998 4.04209 19.1398 4.00349L21.7655 1.37924ZM18.6095 5.12924L19.7338 6.25349C20.183 6.70499 20.9525 6.70724 21.3973 6.26024L23.5948 4.05224C23.7689 4.70098 23.7687 5.38415 23.5944 6.03282C23.42 6.68148 23.0776 7.27268 22.6018 7.74674C21.854 8.49899 20.8025 8.92949 19.7143 8.92949C19.202 8.92949 18.7168 8.83349 18.272 8.64449C18.2033 8.61521 18.1274 8.60714 18.054 8.6213C17.9807 8.63547 17.9132 8.67122 17.8603 8.72399L8.8603 17.724C8.80762 17.7766 8.77185 17.8438 8.75756 17.9169C8.74326 17.9899 8.75109 18.0656 8.78005 18.1342C9.3823 19.5667 9.01555 21.4155 7.9078 22.53C7.43049 23.0141 6.82954 23.3581 6.17033 23.5245C5.51113 23.6908 4.81893 23.6732 4.16905 23.4735L6.3748 21.2535C6.84055 20.7847 6.84805 20.058 6.39655 19.605L5.26705 18.4222C4.8313 17.9835 4.05655 18.0105 3.60355 18.4687L1.40605 20.6767C1.23198 20.028 1.23213 19.3448 1.40647 18.6962C1.58082 18.0475 1.9232 17.4563 2.39905 16.9822C3.1468 16.23 4.1983 15.7995 5.28655 15.7995C5.7988 15.7995 6.28405 15.8955 6.7288 16.0845C6.7975 16.114 6.87347 16.1222 6.94688 16.108C7.02029 16.0938 7.08775 16.0579 7.14055 16.005L16.1405 7.00498C16.1932 6.95235 16.229 6.88519 16.2433 6.81211C16.2576 6.73903 16.2498 6.66334 16.2208 6.59474C15.6185 5.16224 15.9853 3.31274 17.093 2.19824C17.5702 1.71456 18.1708 1.37088 18.8295 1.20455C19.4882 1.03821 20.18 1.05557 20.8295 1.25474L18.6095 3.47549C18.4998 3.5834 18.4126 3.71209 18.3531 3.85406C18.2935 3.99603 18.2629 4.14842 18.2629 4.30236C18.2629 4.4563 18.2935 4.60869 18.3531 4.75066C18.4126 4.89263 18.4998 5.02132 18.6095 5.12924Z'
          fill={color}
        />
        <path
          d='M22.4077 23.3488C22.3243 23.429 22.2129 23.4737 22.0972 23.4734C21.9815 23.4732 21.8704 23.4279 21.7874 23.3473L14.2649 15.8473C14.1932 15.7832 14.0997 15.749 14.0036 15.7518C13.9074 15.7546 13.816 15.7941 13.7482 15.8623C13.6803 15.9304 13.6412 16.022 13.6388 16.1181C13.6364 16.2143 13.671 16.3077 13.7354 16.3791L21.2572 23.8776C21.4822 24.1033 21.7807 24.2278 22.0987 24.2278C22.4167 24.2278 22.7152 24.1033 22.9447 23.8723L24.0164 22.7526C24.126 22.6444 24.213 22.5156 24.2723 22.3736C24.3317 22.2315 24.3622 22.0791 24.3621 21.9252C24.362 21.7712 24.3314 21.6188 24.2719 21.4768C24.2124 21.3349 24.1253 21.2061 24.0157 21.0981L16.5157 13.5981C16.4449 13.5298 16.3502 13.492 16.2519 13.4928C16.1536 13.4937 16.0595 13.5331 15.99 13.6026C15.9204 13.6722 15.881 13.7662 15.8802 13.8645C15.8793 13.9629 15.9171 14.0576 15.9854 14.1283L23.4847 21.6276C23.6564 21.8001 23.6564 22.0506 23.4794 22.2291L22.4077 23.3488ZM4.89066 2.72308L2.64066 0.473076C2.57033 0.402775 2.47497 0.363281 2.37553 0.363281C2.27609 0.363281 2.18073 0.402775 2.11041 0.473076L0.610405 1.97308C0.540104 2.0434 0.50061 2.13876 0.50061 2.2382C0.50061 2.33764 0.540104 2.433 0.610405 2.50333L2.86041 4.75333C2.93082 4.82336 3.02606 4.86274 3.12538 4.86288C3.22469 4.86302 3.32004 4.82391 3.39066 4.75408L3.87516 4.26883L9.60966 10.0033C9.6442 10.0392 9.68554 10.0678 9.73126 10.0875C9.77698 10.1072 9.82617 10.1177 9.87596 10.1182C9.92575 10.1187 9.97514 10.1092 10.0213 10.0904C10.0674 10.0717 10.1093 10.0439 10.1445 10.0087C10.1798 9.97356 10.2077 9.93173 10.2266 9.88567C10.2455 9.83961 10.2551 9.79025 10.2547 9.74046C10.2544 9.69067 10.2441 9.64145 10.2245 9.59567C10.2049 9.54989 10.1764 9.50847 10.1407 9.47383L4.40541 3.73858L4.88991 3.25408C4.92488 3.21929 4.95264 3.17795 4.97161 3.13242C4.99058 3.08688 5.00038 3.03806 5.00045 2.98873C5.00052 2.93941 4.99086 2.89055 4.97202 2.84497C4.95318 2.79938 4.92553 2.75796 4.89066 2.72308ZM3.12516 3.95833L1.40541 2.23858L2.37516 1.26883L4.09491 2.98858L3.12516 3.95833Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_3426_12694'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0.5 0.36377)'
          />
        </clipPath>
      </defs>
    </svg>
  ),

  calendarSvg: ({ color }: SvgProps) => (
    <svg
      width='19'
      height='21'
      viewBox='0 0 19 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.0333 3.13818H2.96664C1.93571 3.13818 1.09998 3.9978 1.09998 5.05818V18.4982C1.09998 19.5586 1.93571 20.4182 2.96664 20.4182H16.0333C17.0642 20.4182 17.9 19.5586 17.9 18.4982V5.05818C17.9 3.9978 17.0642 3.13818 16.0333 3.13818Z'
        stroke={color}
        strokeWidth='1.044'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.2341 1.21826V5.05826'
        stroke={color}
        strokeWidth='1.044'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.76733 1.21826V5.05826'
        stroke={color}
        strokeWidth='1.044'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.09998 8.89795H17.9'
        stroke={color}
        strokeWidth='1.044'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),

  analyticsSvg: ({ color }: SvgProps) => (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.5 16.2725V11.2725M12.5 16.2725V8.27246M16.5 16.2725V14.2725M12.5 4.27246H6.5C5.96957 4.27246 5.46086 4.48317 5.08579 4.85825C4.71071 5.23332 4.5 5.74203 4.5 6.27246V18.2725C4.5 18.8029 4.71071 19.3116 5.08579 19.6867C5.46086 20.0617 5.96957 20.2725 6.5 20.2725H18.5C19.0304 20.2725 19.5391 20.0617 19.9142 19.6867C20.2893 19.3116 20.5 18.8029 20.5 18.2725V12.2725M19.5 2.27246V5.27246M19.5 5.27246V8.27246M19.5 5.27246H22.5M19.5 5.27246H16.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),

  logoutSvg: ({ color }: SvgProps) => (
    <svg
      width='17'
      height='15'
      viewBox='0 0 17 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_3426_12706)'>
        <path
          d='M11.5357 11V13C11.5357 13.2652 11.4078 13.5196 11.1801 13.7071C10.9524 13.8946 10.6435 14 10.3215 14H1.82146C1.49941 14 1.19056 13.8946 0.962834 13.7071C0.735111 13.5196 0.607178 13.2652 0.607178 13V2C0.607178 1.73478 0.735111 1.48043 0.962834 1.29289C1.19056 1.10536 1.49941 1 1.82146 1H10.3215C10.6435 1 10.9524 1.10536 11.1801 1.29289C11.4078 1.48043 11.5357 1.73478 11.5357 2V4M7.89289 7.5H16.3929M16.3929 7.5L13.9643 5.5M16.3929 7.5L13.9643 9.5'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_3426_12706'>
          <rect
            width='17'
            height='14'
            fill='white'
            transform='translate(0 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}