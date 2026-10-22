export default function LegalPages() {
  return (
    <div className="border-t border-white/10 bg-black/20">
      <section id="politica-de-privacidade" className="scroll-mt-28 border-b border-white/10 py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3FF12]">Privacidade · Atualizada em outubro de 2026</p>
          <h2 className="text-3xl font-black uppercase text-white">Política de Privacidade</h2>
          <div className="space-y-5 text-sm leading-7 text-zinc-200 sm:text-base">
            <p>
              O LOUD Archive é um arquivo independente, informativo e não oficial, sem afiliação ou endosso da
              LOUD. Esta política explica o tratamento de dados neste site à luz da Lei nº 13.709/2018 (LGPD).
            </p>
            <div>
              <h3 className="font-bold text-white">Dados, finalidades e bases legais</h3>
              <p>
                O site não oferece cadastro, formulário ou compra e não solicita dados pessoais diretamente.
                O provedor de hospedagem pode tratar dados técnicos de conexão (como endereço IP, data/hora,
                navegador e registros de segurança) para entregar o site e prevenir abuso, conforme suas
                próprias obrigações e políticas. O LOUD Archive não controla os prazos de retenção desses
                registros do provedor.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white">Consentimento para medição opcional</h3>
              <p>
                Google Analytics, Google Tag Manager e cookies publicitários não estão configurados. A medição
                de desempenho Vercel Speed Insights permanece desativada até que você a autorize no painel de
                preferências. A escolha é opcional, pode ser recusada sem afetar o acesso e pode ser alterada
                a qualquer momento em “Preferências de privacidade”. O site usa armazenamento local do
                navegador para guardar essa escolha; não instala cookie próprio para essa finalidade.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white">Compartilhamento, links e transferências</h3>
              <p>
                A hospedagem e, somente após autorização, a ferramenta de medição de desempenho podem receber
                dados técnicos necessários aos seus serviços. Links para redes sociais e outros sites são
                externos; ao acessá-los, aplicam-se os termos e políticas desses terceiros. Seus tratamentos
                e eventuais transferências internacionais são regidos por eles, não por este site.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white">Seus direitos e contato</h3>
              <p>
                A LGPD prevê direitos como confirmação e acesso, correção, anonimização, bloqueio ou eliminação
                quando cabível, informação sobre compartilhamentos e revogação do consentimento. Para exercer
                esses direitos ou apresentar solicitação, use o canal de contato do controlador responsável
                pelo LOUD Archive. A identificação jurídica e um canal direto de privacidade não foram
                informados no projeto e devem ser publicados pelo responsável antes da divulgação do site.
              </p>
            </div>
            <p>
              O responsável deve revisar esta política, confirmar a configuração do provedor e informar um
              canal de atendimento antes da publicação. Esta página é informativa e não substitui orientação
              jurídica nem, por si só, certifica conformidade legal.
            </p>
          </div>
        </div>
      </section>

      <section id="termos-de-servico" className="scroll-mt-28 py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3FF12]">Termos de Serviço · Atualizados em outubro de 2026</p>
          <h2 className="text-3xl font-black uppercase text-white">Termos de Serviço</h2>
          <div className="space-y-5 text-sm leading-7 text-zinc-200 sm:text-base">
            <p>
              Ao acessar o LOUD Archive, você concorda com estes termos. O site é um projeto independente,
              sem vínculo oficial com a LOUD, e oferece conteúdo histórico e informativo sem garantia de
              atualização, completude ou disponibilidade contínua.
            </p>
            <div>
              <h3 className="font-bold text-white">Uso do conteúdo e fontes</h3>
              <p>
                Use o conteúdo de forma lícita e não prejudicial. Informações de terceiros são apresentadas
                com finalidade informativa e podem mudar; consulte as fontes oficiais vinculadas para
                confirmação. Marcas, nomes, imagens e materiais de terceiros pertencem a seus respectivos
                titulares. A inclusão de links externos não implica aprovação ou responsabilidade pelo
                conteúdo, segurança ou práticas de privacidade desses sites.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white">Disponibilidade e responsabilidade</h3>
              <p>
                O serviço é fornecido “como está”. Na máxima extensão permitida pela legislação aplicável,
                o operador não garante acesso ininterrupto nem responde por indisponibilidade ou conteúdo de
                terceiros. Nada nestes termos limita direitos que não possam ser excluídos por lei.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white">Alterações e legislação</h3>
              <p>
                Estes termos podem ser atualizados; a data de revisão será indicada nesta página. Aplica-se a
                legislação brasileira, respeitadas as normas de proteção obrigatória ao consumidor e demais
                direitos aplicáveis. Para questões sobre o site, procure o canal de contato do operador, que
                deve ser informado nesta página antes da publicação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
