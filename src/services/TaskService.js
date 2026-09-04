import { SupabaseClient } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

export async function listarTarefas() {
    const { data, error } = await supabase
        .from('tarefas')
        .select('id, titulo,horario, status, created_at')
        .order('created_at', { ascending: true })

    if(error) {
        throw error
    }

    return data
}

export async function criarTarefa(tarefa) {

    const { data, error } = await supabase
        .from('tarefas')
        .insert({
            titulo: tarefa.titulo,
            horario: tarefa.horario,
            status: tarefa.status
        })
        .select()
        .single()

    if(error) {
        throw error
    }
    
    return data 
}

export async function atualizarStatusTarefa(id, status) {

    const { data, error } = await supabase
        .from('tarefas')
        .update({
            status: status
        })
        .eq('id', id)
        .select()
        .single()

    if(error) {
        throw error
    }

    return data
    
}