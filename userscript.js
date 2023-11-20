// ==UserScript==
// @name        No ad break servers-minecraft.net
// @supportURL  https://github.com/Dovias/no-ad-break-servers-minecraft.net/
// @downloadURL https://raw.githubusercontent.com/Dovias/no-ad-break-servers-minecraft.net/main/userscript.js
// @include     /^https?:\/\/servers-minecraft.net\/landing.+$/
// @grant       none
// @version     1.0
// @author      Dovias
// @description Allows you to bypass 15 second ad break in servers-minecraft.net website while voting.
// ==/UserScript==

const urlParams = new URLSearchParams(window.location.search)

post(urlParams.get('referer'), {
  id: urlParams.get('id'),
  username: urlParams.get('username'),
  post_review: urlParams.get('post_review'),
  review_score: urlParams.get('review_score'),
  review_text: urlParams.get('review_text'),
  verified: urlParams.get('verified')
})
