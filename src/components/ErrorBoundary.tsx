import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Uygulama genelinde bir React render hatasını yakalar ve tüm sayfanın boş
 * (beyaz) kalması yerine kullanıcıya güvenli, genel bir mesaj gösterir.
 * Ham hata/stack trace kullanıcıya SIZDIRILMAZ; yalnızca konsola yazılır.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Yalnızca geliştirici konsoluna; kullanıcıya gösterilmez.
    console.error('[ErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '40px',
            fontFamily: "'Inter', sans-serif",
            background: '#F4F7FC',
            color: '#1E2A3E',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0A5C8E' }}>
            Bir şeyler ters gitti
          </h1>
          <p style={{ fontSize: '15px', color: '#5A6A7E', maxWidth: '480px' }}>
            Sayfa yüklenirken beklenmeyen bir sorun oluştu. Lütfen sayfayı yenileyin.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '8px',
              background: '#0A5C8E',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Sayfayı Yenile
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
