export function cleanTags(textoHTML) {
  let div = document.createElement("div");
  div.innerHTML = textoHTML;
  let text = div.textContent || div.innerText || "";
  return text;
}
