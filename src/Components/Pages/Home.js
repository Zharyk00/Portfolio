import React from "react";
import { motion, useMotionValue } from "framer-motion";
import "../../Styles/ComponentsStyles/HomePage.css";
import { displayName } from "../../Animations/Animation";
import WBIcon from "../../Svg/WBIcon";

function Home() {
  const delay = useMotionValue([1]);
  const { hidden, visible } = displayName;

  return (
    <div className="main-page">
      <motion.div className="greet">
        <motion.div className="hi">
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.3,
            }}
            className="letters"
          >
            H
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.4,
            }}
            className="letters"
          >
            i
          </motion.h1>
          <br />
          <br />
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.5,
            }}
            className="letters"
          >
            t
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.6,
            }}
            className="letters"
          >
            h
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.7,
            }}
            className="letters"
          >
            e
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.8,
            }}
            className="letters"
          >
            r
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.9,
            }}
            className="letters"
          >
            e
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 0.9,
              easy: "easyout",
              delay: 1,
            }}
            className="letters"
          >
            !
          </motion.h1>
        </motion.div>
        <motion.div className="name">
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.1,
            }}
            className="letters"
          >
            I
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1.1,
              easy: "easyout",
              delay: 1.2,
            }}
            className="letters"
          >
            a
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.3,
            }}
            className="letters"
          >
            m
          </motion.h1>
          <br />
          <br />
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.4,
            }}
            className="letters"
          >
            Z
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.5,
            }}
            className="letters"
          >
            h
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.6,
            }}
            className="letters"
          >
            a
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.7,
            }}
            className="letters"
          >
            r
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.8,
            }}
            className="letters"
          >
            y
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.9,
            }}
            className="letters"
          >
            k
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 2,
            }}
            className="letters"
          >
            .
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 2.1,
            }}
            className="letters"
          >
            .
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 2.2,
            }}
            className="letters"
          >
            .
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className="me">
        {/* <WBIcon fill="red" width="300" height="300" color="red" /> */}

        <motion.svg
          width="58"
          height="79"
          viewBox="0 0 58 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: { duration: 2, delay: 1 },
            }}
            d="M5.99865 18C5.99865 34.3871 3.26014 51.8132 11.4905 66.5C13.1133 69.3957 15.2053 77 19.5602 77C23.6653 77 28.8164 75.1504 32.2251 73C39.3804 68.486 49.4586 63.9554 53.1839 55.7778C56.7987 47.8426 56.6195 34.8154 54.4168 26.4444C51.2442 14.3878 32.1737 2 20.0085 2C11.0187 2 8.57417 2.05852 4.98994 11.2222C1.28825 20.6863 1.54683 30.1063 2.97252 40"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </motion.svg>

        <motion.svg
          width="152"
          height="57"
          viewBox="0 0 152 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Hello" filter="url(#filter0_d_6_2)">
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, delay: 1 },
              }}
              d="M13.8675 47.1991L5.71928 47.4149C5.26568 47.4149 4.99462 47.3319 4.90612 47.166C4.81761 47.0111 4.77335 46.657 4.77335 46.1039C4.77335 45.5507 4.8342 45.2243 4.9559 45.1247C5.08866 45.0141 5.43163 44.9588 5.9848 44.9588H9.93446C10.2 44.9588 10.3327 39.1837 10.3327 27.6334V20.6966C10.3327 9.41185 10.2221 3.76948 10.0008 3.76948H7.01371C6.52691 3.76948 6.17841 3.69756 5.96821 3.55374C5.758 3.40991 5.6529 3.07248 5.6529 2.54143C5.6529 2.01038 5.75247 1.67295 5.95161 1.52912C6.15076 1.3853 6.50479 1.31339 7.01371 1.31339L13.3365 1.52912L20.6716 1.31339C21.1252 1.31339 21.4073 1.40189 21.5179 1.57891C21.6286 1.75592 21.6839 2.11549 21.6839 2.6576C21.6839 3.18864 21.612 3.50948 21.4681 3.62012C21.3243 3.71969 20.9703 3.76948 20.406 3.76948H16.6555C16.4343 3.76948 16.3236 6.74002 16.3236 12.6811L16.39 21.6425C16.39 22.1514 16.4232 22.4502 16.4896 22.5387C16.556 22.6272 16.7938 22.6714 17.2032 22.6714H42.013C42.4224 22.6714 42.6602 22.6382 42.7266 22.5718C42.793 22.4944 42.8262 22.251 42.8262 21.8417V13.5607C42.8262 11.2705 42.7709 9.06888 42.6602 6.95576C42.5496 4.83157 42.4279 3.76948 42.2951 3.76948H38.4118C37.9693 3.76948 37.6651 3.69756 37.4991 3.55374C37.3332 3.39885 37.2502 3.05588 37.2502 2.52484C37.2502 1.99379 37.311 1.66188 37.4327 1.52912C37.5655 1.3853 37.8697 1.31339 38.3455 1.31339L45.6142 1.52912L52.2191 1.31339C52.6727 1.31339 52.9548 1.40189 53.0654 1.57891C53.1761 1.75592 53.2314 2.11549 53.2314 2.6576C53.2314 3.18864 53.1539 3.50948 52.999 3.62012C52.8552 3.71969 52.5012 3.76948 51.9369 3.76948H48.9498C48.817 3.76948 48.7507 10.6344 48.7507 24.3641C48.7507 38.0939 48.8392 44.9588 49.0162 44.9588H52.6173C53.0046 44.9588 53.248 45.0307 53.3475 45.1745C53.4471 45.3184 53.4969 45.6392 53.4969 46.1371C53.4969 46.6238 53.4471 46.9557 53.3475 47.1328C53.248 47.3208 53.0046 47.4149 52.6173 47.4149L46.1618 47.1991L38.4782 47.4149C38.0246 47.4149 37.7425 47.3264 37.6319 47.1494C37.5212 46.9834 37.4659 46.6349 37.4659 46.1039C37.4659 45.5617 37.5378 45.2354 37.6817 45.1247C37.8365 45.0141 38.1961 44.9588 38.7603 44.9588H42.4943C42.7155 44.9588 42.8262 41.2912 42.8262 33.9562V25.5258C42.8262 25.1386 42.804 24.9062 42.7598 24.8288C42.7155 24.7514 42.6049 24.7126 42.4279 24.7126H17.004C16.6942 24.7126 16.5117 24.7514 16.4564 24.8288C16.4121 24.9062 16.39 25.1828 16.39 25.6586C16.39 38.5254 16.5947 44.9588 17.004 44.9588H21.4847C21.8609 44.9588 22.0877 45.0307 22.1651 45.1745C22.2536 45.3073 22.2979 45.5507 22.2979 45.9047C22.2979 46.2587 22.2924 46.4911 22.2813 46.6017C22.2813 46.7013 22.2702 46.823 22.2481 46.9668C22.226 47.0996 22.1873 47.1881 22.1319 47.2323C21.9881 47.354 21.7724 47.4149 21.4847 47.4149L13.8675 47.1991Z"
              fill="black"
            />
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, delay: 2 },
              }}
              d="M78.3897 31.915L63.2217 31.5665C63.0889 31.8984 63.0225 32.7779 63.0225 34.2051C63.0225 35.6323 63.2991 37.0539 63.8523 38.4701C64.4055 39.8862 65.1357 41.0479 66.0429 41.9551C67.979 43.869 70.2138 44.826 72.7473 44.826C75.834 44.826 78.6442 43.5039 81.1777 40.8598C81.4764 40.5611 81.6645 40.4117 81.7419 40.4117C81.8194 40.4117 82.0573 40.5887 82.4555 40.9427C82.8649 41.2857 83.0696 41.5015 83.0696 41.59C83.0696 41.6785 82.887 41.9551 82.5219 42.4197C82.1679 42.8733 81.6258 43.432 80.8956 44.0958C80.1765 44.7486 79.3522 45.3847 78.4229 46.0043C76.1881 47.4868 73.8924 48.228 71.5359 48.228C69.1904 48.228 67.1769 47.8851 65.4952 47.1991C63.8136 46.5243 62.4196 45.5783 61.3132 44.3614C60.218 43.1333 59.3771 41.6785 58.7908 39.9968C58.2155 38.3041 57.9278 36.4454 57.9278 34.4208C57.9278 32.3962 58.2708 30.4933 58.9567 28.7121C59.6427 26.9309 60.5886 25.393 61.7945 24.0986C64.4165 21.2885 67.7909 19.8834 71.9176 19.8834C75.2698 19.8834 77.8587 21.0008 79.6841 23.2357C81.399 25.3377 82.2564 27.8878 82.2564 30.8861C82.2564 31.572 80.9675 31.915 78.3897 31.915ZM75.6349 29.7078C76.6527 29.7078 77.1617 29.6248 77.1617 29.4589C77.1617 26.2062 76.1549 23.9493 74.1413 22.688C73.1677 22.0795 72.1554 21.7753 71.1044 21.7753C70.0644 21.7753 69.0632 22.0297 68.1007 22.5387C67.1492 23.0476 66.3416 23.6948 65.6778 24.4803C64.2617 26.173 63.4872 27.9044 63.3544 29.6746C63.3544 29.8959 63.5591 30.0065 63.9685 30.0065L75.6349 29.7078Z"
              fill="black"
            />
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, delay: 3 },
              }}
              d="M85.9239 3.57033C85.7027 3.57033 85.592 3.42098 85.592 3.12226C85.592 2.81249 85.6308 2.51377 85.7082 2.22612C85.7856 1.93847 85.8299 1.76699 85.841 1.71167C85.8631 1.64529 85.8907 1.58997 85.9239 1.54572C85.9571 1.50146 85.9793 1.46827 85.9903 1.44615C86.0014 1.42402 86.0346 1.40742 86.0899 1.39636C86.1563 1.37423 86.2005 1.36317 86.2226 1.36317C86.3333 1.32998 87.7826 1.21381 90.5706 1.01467C93.3697 0.815529 94.8909 0.715958 95.1343 0.715958C95.5215 0.715958 95.7151 1.11977 95.7151 1.92741L96.1134 42.6521C96.1134 44.2784 96.2296 45.0916 96.4619 45.0916H99.3827C99.7588 45.0916 99.9856 45.169 100.063 45.3239C100.152 45.4677 100.196 45.7111 100.196 46.0541C100.196 46.397 100.19 46.6238 100.179 46.7345C100.168 46.834 100.14 46.9447 100.096 47.0664C100.008 47.2434 99.7699 47.3319 99.3827 47.3319L93.7403 47.1991L87.2184 47.3319C86.8422 47.3319 86.5988 47.2434 86.4882 47.0664C86.3886 46.9004 86.3388 46.6183 86.3388 46.22C86.3388 45.8107 86.3886 45.523 86.4882 45.3571C86.5877 45.1801 86.809 45.0916 87.152 45.0916H90.6204C90.8416 45.0916 90.9523 43.2108 90.9523 39.4492C90.9523 35.6765 90.8859 29.5363 90.7531 21.0285C90.6204 12.5096 90.4931 7.56978 90.3715 6.20897C90.2498 4.8371 90.1723 4.09585 90.1391 3.98521C90.117 3.86352 90.0949 3.76394 90.0727 3.6865C90.0617 3.60906 90.034 3.54821 89.9898 3.50395C89.9566 3.44864 89.9289 3.40991 89.9068 3.38779C89.8736 3.32141 89.8127 3.28822 89.7242 3.28822H89.4587L85.9239 3.57033Z"
              fill="black"
            />
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, delay: 4 },
              }}
              d="M103.382 3.57033C103.161 3.57033 103.05 3.42098 103.05 3.12226C103.05 2.81249 103.089 2.51377 103.166 2.22612C103.244 1.93847 103.288 1.76699 103.299 1.71167C103.321 1.64529 103.349 1.58997 103.382 1.54572C103.415 1.50146 103.437 1.46827 103.448 1.44615C103.46 1.42402 103.493 1.40742 103.548 1.39636C103.614 1.37423 103.659 1.36317 103.681 1.36317C103.791 1.32998 105.241 1.21381 108.029 1.01467C110.828 0.815529 112.349 0.715958 112.592 0.715958C112.98 0.715958 113.173 1.11977 113.173 1.92741L113.572 42.6521C113.572 44.2784 113.688 45.0916 113.92 45.0916H116.841C117.217 45.0916 117.444 45.169 117.521 45.3239C117.61 45.4677 117.654 45.7111 117.654 46.0541C117.654 46.397 117.648 46.6238 117.637 46.7345C117.626 46.834 117.599 46.9447 117.554 47.0664C117.466 47.2434 117.228 47.3319 116.841 47.3319L111.198 47.1991L104.677 47.3319C104.3 47.3319 104.057 47.2434 103.946 47.0664C103.847 46.9004 103.797 46.6183 103.797 46.22C103.797 45.8107 103.847 45.523 103.946 45.3571C104.046 45.1801 104.267 45.0916 104.61 45.0916H108.079C108.3 45.0916 108.41 43.2108 108.41 39.4492C108.41 35.6765 108.344 29.5363 108.211 21.0285C108.079 12.5096 107.951 7.56978 107.83 6.20897C107.708 4.8371 107.63 4.09585 107.597 3.98521C107.575 3.86352 107.553 3.76394 107.531 3.6865C107.52 3.60906 107.492 3.54821 107.448 3.50395C107.415 3.44864 107.387 3.40991 107.365 3.38779C107.332 3.32141 107.271 3.28822 107.182 3.28822H106.917L103.382 3.57033Z"
              fill="black"
            />
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: { duration: 2, delay: 5 },
              }}
              d="M121.255 34.4208C121.255 32.4958 121.598 30.6427 122.284 28.8614C122.97 27.0692 123.916 25.5147 125.122 24.1982C127.755 21.3217 131.179 19.8834 135.394 19.8834C139.134 19.8834 142.16 21.2276 144.472 23.9161C146.751 26.5602 147.89 29.7908 147.89 33.6077C147.89 37.8892 146.696 41.3798 144.306 44.0792C141.861 46.8451 138.525 48.228 134.299 48.228C130.593 48.228 127.489 46.8894 124.989 44.212C122.5 41.5346 121.255 38.2709 121.255 34.4208ZM126.483 35.5161C126.483 38.8683 127.434 41.6231 129.337 43.7805C130.665 45.2962 132.319 46.0541 134.299 46.0541C139.831 46.0541 142.597 41.7449 142.597 33.1264C142.597 29.1546 141.429 26.0568 139.095 23.8331C137.845 22.6493 136.335 22.0574 134.564 22.0574C129.177 22.0574 126.483 26.5436 126.483 35.5161Z"
              fill="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_6_2"
              x="0.773354"
              y="0.715958"
              width="151.117"
              height="55.5121"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_6_2"
                result="shape"
              />
            </filter>
          </defs>
        </motion.svg>

        <motion.svg
          width="250"
          height="250"
          viewBox="0 0 488 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="finaly">
            <g id="Line 1" filter="url(#filter0_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                d="M17.8921 149.989L178.167 61.4533"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 3" filter="url(#filter1_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 2,
                  },
                }}
                d="M183.611 291.455L305.455 9.38948"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 5" filter="url(#filter2_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                d="M470.108 149.011L309.833 237.547"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 2" filter="url(#filter3_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 1,
                  },
                }}
                d="M178.209 237.687L16.687 151.791"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 4" filter="url(#filter4_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 1,
                  },
                }}
                d="M309.791 61.3129L471.313 147.209"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_b_4_13"
              x="7.35668"
              y="50.9179"
              width="181.346"
              height="109.606"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_4_13"
              x="173.075"
              y="-1.14635"
              width="142.916"
              height="303.137"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_4_13"
              x="299.297"
              y="138.476"
              width="181.346"
              height="109.606"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_b_4_13"
              x="6.15156"
              y="141.255"
              width="182.593"
              height="106.967"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_b_4_13"
              x="299.255"
              y="50.7775"
              width="182.593"
              height="106.967"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Home;
