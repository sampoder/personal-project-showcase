import twemoji from 'twemoji'
import React, { memo } from 'react'
import { isIOS, isMacOs } from 'react-device-detect'
const Twemoji = ({ emoji }) => (
  <>
    {!isIOS && !isMacOs ? (
      <>
        <span
          dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji, {
              folder: 'svg',
              ext: '.svg',
            }),
          }}
        />
        <style>
          {`
      .emoji {
        display: inline-block;
        width: auto;
        height: 1em;
        margin-left: 2px;
        letter-spacing: 4px;
        vertical-align: -0.125em;
      }
      `}
        </style>
      </>
    ) : (
      <>{emoji} </>
    )}
  </>
)

export default memo(Twemoji)
