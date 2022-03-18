<main class="manifest">
    <section class="manifest__introduction">
        <div class="container-wrapper">
            <div id="manifesto" markdown="1" class="manifest__definition">{% include_relative _manifesto/manifesto.md %}</div>
        </div>
    </section>
    <section class="manifest__principles">
        <div id="principios" markdown="1" class="container-wrapper">{% include_relative _manifesto/principios.md %}</div>
    </section>
    <section class="manifest__assigners">
        <div id="signatarios" class="container-wrapper">
            <h3>Signatários</h3>
        
            <ul>
            {% for signatario in site.data.signatarios %}
            <li>
                <strong translate="no">{{ signatario.nome }}</strong>
                <span>{{ signatario.cargo }}</span>
                {% if signatario.implementacao %}
                <a href="{{ signatario.implementacao}}" rel="noreferrer noopener" target="_blank"> Entenda as Ações </a>
                {% endif %}
            </li>
            {% endfor %}
            </ul>
            <button class="show-more__btn" data-show-more="Ver todos(as)" data-show-less="Ver menos" type="button">Ver Todas(os)</button>
        </div>
    </section>
    <section class="faq">
        <div id="faq" markdown="1" class="container-wrapper">{% include_relative _manifesto/perguntas_frequentes.md %}</div>
    </section>
</main>