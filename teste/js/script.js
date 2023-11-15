document.addEventListener("DOMContentLoaded", function () {
  const cartBadge = document.getElementById("cart-badge");
  let itemCount = 0;

  // Função para adicionar itens ao carrinho
  function addItemToCart() {
    itemCount++;
    cartBadge.textContent = itemCount;
    cartBadge.style.display = "inline-block";
  }

  // Exemplo: Adicionando um item ao carrinho quando o ícone é clicado
  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.addEventListener("click", addItemToCart);
});
