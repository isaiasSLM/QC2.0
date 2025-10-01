// script básico para interações simples
document.addEventListener('DOMContentLoaded', function () {
  // colocar ano atual no rodapé
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // botão menu para mobile (simples)
  const btnMenu = document.querySelector('.btn-menu');
  const nav = document.querySelector('.navegacao');
  btnMenu && btnMenu.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.background = 'rgba(255,255,255,0.98)';
      nav.style.padding = '12px 18px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
      nav.style.zIndex = 60;
    }
  });

  // rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".galeria-wrapper");
  const imgs = wrapper.querySelectorAll("img");

  // duplica as imagens para criar o loop infinito
  wrapper.innerHTML += wrapper.innerHTML;

  // largura total das imagens
  const imgWidth = 400 + 12; // 400px + 12px de gap
  const totalWidth = imgWidth * imgs.length;

  let pos = 0;
  const speed = 0.5; // quanto maior, mais rápido (px por frame)

  function animar() {
    pos -= speed;
    if (Math.abs(pos) >= totalWidth) {
      pos = 0; // reinicia o loop
    }
    wrapper.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animar);
  }

  animar();
});

const aeroportos = [
  "Rio Branco - RBR", "Maceió - MCZ", "Manaus - MAO", "Macapá - MCP",
  "Salvador - SSA", "Porto Seguro - BPS", "Fortaleza - FOR", "Brasília - BSB",
  "Vitória - VIX", "Goiânia - GYN", "São Luís - SLZ", "Confins - CNF",
  "Campo Grande - CGR", "Cuiabá - CGB", "Belém - BEL", "Santarém - STM",
  "João Pessoa - JPA", "Campina Grande - CPV", "Recife - REC", "Teresina - THE",
  "Curitiba - CWB", "Londrina - LDB", "Foz do Iguaçu - IGU",
  "Rio de Janeiro - GIG", "Santos Dumont - SDU", "Natal - NAT",
  "Porto Velho - PVH", "Boa Vista - BVB", "Porto Alegre - POA", "Caxias do Sul - CXJ",
  "Florianópolis - FLN", "Navegantes - NVT", "Chapecó - XAP", "Aracaju - AJU",
  "Guarulhos - GRU", "Congonhas - CGH", "Viracopos - VCP", "Palmas - PMW"
];

// Função autocomplete
function autocomplete(input, lista) {
  input.addEventListener("input", function () {
    const valor = this.value.toLowerCase();
    const sugestoes = lista.filter(a => a.toLowerCase().includes(valor));
    const dropdown = this.nextElementSibling;
    dropdown.innerHTML = "";

    sugestoes.forEach(s => {
      const div = document.createElement("div");
      div.textContent = s;
      div.onclick = () => {
        input.value = s;
        dropdown.innerHTML = "";
      };
      dropdown.appendChild(div);
    });
  });
}

// Função para formatar data YYYY-MM-DD → DD/MM/YYYY
function formatarData(data) {
  if (!data) return "";
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Aplicar no carregamento
document.addEventListener("DOMContentLoaded", () => {
  autocomplete(document.getElementById("partida"), aeroportos);
  autocomplete(document.getElementById("destino"), aeroportos);

  const somenteIda = document.getElementById("somenteIda");
  const volta = document.getElementById("volta");

  somenteIda.addEventListener("change", () => {
    volta.disabled = somenteIda.checked;
    if (somenteIda.checked) volta.value = "";
  });

  document.getElementById("form-viagem").addEventListener("submit", function (e) {
    e.preventDefault();

    const partida = document.getElementById("partida").value;
    const destino = document.getElementById("destino").value;
    const ida = formatarData(document.getElementById("ida").value);
    const voltaData = somenteIda.checked ? "Somente ida" : formatarData(document.getElementById("volta").value);
    const adultos = document.getElementById("adultos").value;
    const criancas = document.getElementById("criancas").value;
    const bebes = document.getElementById("bebes").value;
    const nome = document.getElementById("nome").value;

    const mensagem = `✈️ *Consulta de passagem - QueroCash*
👤 Nome: ${nome}
📍 Partida: ${partida}
🏁 Destino: ${destino}
📅 Ida: ${ida}
📅 Volta: ${voltaData}
👨‍👩‍👧‍👦 Passageiros:
- Adultos: ${adultos}
- Crianças: ${criancas}
- Bebês: ${bebes}`;

    const url = `https://wa.me/558488770810?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
});