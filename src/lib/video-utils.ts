/**
 * Video utility functions for optimized video handling
 */

/**
 * Generates a thumbnail path from a video path
 * @param videoPath - Path to the video file
 * @returns Thumbnail path (assumes .jpg extension)
 */
export function generateThumbnailPath(videoPath: string): string {
  const lastDotIndex = videoPath.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return videoPath + '-thumb.jpg';
  }
  return videoPath.substring(0, lastDotIndex) + '-thumb.jpg';
}

/**
 * Video optimization presets for different use cases
 */
export const VIDEO_PRESETS = {
  // High-quality videos for product showcases
  showcase: {
    preload: 'metadata' as const,
    bandwidthThreshold: 2,
    autoPlay: true,
    controls: false,
  },
  
  // Background videos with lower bandwidth requirements
  background: {
    preload: 'none' as const,
    bandwidthThreshold: 1,
    autoPlay: true,
    controls: false,
  },
  
  // User-controlled videos
  interactive: {
    preload: 'metadata' as const,
    bandwidthThreshold: 1.5,
    autoPlay: false,
    controls: true,
  },
  
  // Mobile-optimized settings
  mobile: {
    preload: 'none' as const,
    bandwidthThreshold: 0.5,
    autoPlay: false,
    controls: true,
  },
} as const;

/**
 * Detects if the user is on a mobile device
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Gets appropriate video settings based on device and context
 */
export function getVideoSettings(context: keyof typeof VIDEO_PRESETS = 'showcase') {
  const preset = VIDEO_PRESETS[context];
  const isMobile = isMobileDevice();
  
  return {
    ...preset,
    // Override for mobile devices
    ...(isMobile && {
      bandwidthThreshold: Math.min(preset.bandwidthThreshold, 1),
      autoPlay: false,
    }),
  };
}
