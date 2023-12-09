import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server';
import createError from 'http-errors';

export default eventHandler(async (event) => {
  const param = event.context.params.id;
  console.log(param);
  if (!param) return;

  const client = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  const qr = await client.from('qr').select('*').eq('uuid', param);
  if (qr.data?.length === 0) return;

  const userQrRelation = await client.from('user_qr_relation').select('*').eq('qr_uuid', param);
  if (userQrRelation.data?.length > 0) throw createError(400, 'Cup already registered');

  const { data } = await client
    .from('user_qr_relation')
    .insert([
      {
        user_uuid: user.id,
        qr_uuid: param,
      },
    ])
    .select();

  return { data };
});
