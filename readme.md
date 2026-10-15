# Composição nº III de Piet Mondrian - Parte A

Degradê: a função gradientFilter() percorre o canvas linha a linha em y e usa lerpColor para interpolar entre dois cinzentos claros (232,237,231 e 211,206,207). O map converte a posição vertical num valor de 0 a 1, que define a mistura das duas cores em cada linha, e cada cor é desenhada com uma line horizontal. O resultado é um fundo suave que evita o branco plano e funciona como base de papel. É chamada no setup() para o degradê ficar desenhado antes de tudo o resto.

Textura: no fim do draw(), blendMode(MULTIPLY) multiplica a imagem textura1.jpg pelas cores que já estão no canvas, o que escurece sem cobrir o que está por baixo. O tint(255, 90) reduz a opacidade da imagem para cerca de 35%, para o grão ficar subtil e não dominar as cores. A textura é desenhada em último lugar para se sobrepor a tudo (fundo, linhas e quadrados), e o noTint() repõe o estado normal. O loadImage com await no setup() garante que a imagem está carregada antes do draw().

Linhas e quadrados: as linhas pretas (cor 20) têm espessuras diferentes (15 e 10) para criar hierarquia, e os três quadrados coloridos não têm contorno (strokeWeight(0)).

windowResized: redimensiona o canvas, mas como o noLoop() está ativo, o conteúdo desaparece ao redimensionar.