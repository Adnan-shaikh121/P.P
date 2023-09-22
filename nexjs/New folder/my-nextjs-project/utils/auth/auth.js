import { supabase } from '../supabaseClient';

export const signUp = async (email, password) => {
    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        return user;
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        return user;
    } catch (error) {
        console.error('Error signing in:', error.message);
        throw error;
    }
};
