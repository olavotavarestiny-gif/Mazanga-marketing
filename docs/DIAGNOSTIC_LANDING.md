# Landing de diagnóstico

## Rota

- Página: `/diagnostico`
- API: `POST /api/diagnostic-lead`

## KukuGest

A API envia as respostas para o formulário público KukuGest `cmtadsouv03kbh2kv8xw8xwxm`. Os campos que já existem no formulário são mapeados diretamente; as respostas adicionais, a classificação interna, as razões e a atribuição de campanha seguem num resumo estruturado associado à submissão.

Variáveis opcionais:

```env
KUKUGEST_DIAGNOSTIC_FORM_ID=cmtadsouv03kbh2kv8xw8xwxm
KUKUGEST_PUBLIC_API_URL=https://crm-mazanga.onrender.com
```

Não é necessária uma chave no frontend. A pontuação é calculada apenas no servidor.

## Tracking

O formulário publica eventos sem dados pessoais em `window.dataLayer`:

- `diagnostic_form_start`
- `diagnostic_form_step`
- `diagnostic_form_error`
- `Lead`, apenas depois da confirmação da API
- `qualified_lead`, apenas para pedidos prioritários ou qualificados

São preservados UTMs, `fbclid`, `gclid`, URL inicial e referrer.

