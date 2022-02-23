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
                <strong>{{ signatario.nome }}</strong> {{ signatario.cargo }}
            </li>
            {% endfor %}
            </ul>
        </div>
    </section>
    <section class="faq">
        <div id="faq" markdown="1" class="container-wrapper">{% include_relative _manifesto/perguntas_frequentes.md %}</div>
    </section>
</main>